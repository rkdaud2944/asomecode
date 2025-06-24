// scripts/fix-translations.js
// 하드코딩된 텍스트를 자동으로 $t() 함수로 교체하는 스크립트

const fs = require('fs');
const path = require('path');

class TranslationFixer {
  constructor() {
    this.srcDir = path.join(__dirname, '../src');
    this.backupDir = path.join(__dirname, '../backup');
    this.reportPath = path.join(__dirname, '../hardcoded-text-report.json');
    this.fixedFiles = [];
    this.errors = [];
  }

  // 백업 디렉토리 생성
  ensureBackupDir() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
  }

  // 파일 백업
  backupFile(filePath) {
    try {
      const relativePath = path.relative(this.srcDir, filePath);
      const backupPath = path.join(this.backupDir, relativePath);
      const backupDir = path.dirname(backupPath);
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      fs.copyFileSync(filePath, backupPath);
      return backupPath;
    } catch (error) {
      console.error(`❌ 백업 실패 ${filePath}:`, error.message);
      return null;
    }
  }

  // Vue 파일의 하드코딩된 텍스트 교체
  fixVueFile(fileData) {
    const { path: filePath, hardcodedTexts } = fileData;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;
      
      // 파일 백업
      const backupPath = this.backupFile(filePath);
      if (!backupPath) {
        throw new Error('백업 실패');
      }

      // 각 하드코딩된 텍스트를 번역 함수로 교체
      hardcodedTexts.forEach(item => {
        const { originalText, translationKey, fullMatch } = item;
        
        // 다양한 패턴으로 교체 시도
        const replacements = this.generateReplacements(fullMatch, translationKey, originalText);
        
        for (const replacement of replacements) {
          if (content.includes(fullMatch)) {
            content = content.replace(new RegExp(this.escapeRegex(fullMatch), 'g'), replacement);
            hasChanges = true;
            console.log(`   ✅ "${originalText}" → $t('${translationKey}')`);
            break;
          }
        }
      });

      // 변경사항이 있으면 파일 저장
      if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push({
          path: filePath,
          backup: backupPath,
          changesCount: hardcodedTexts.length
        });
        console.log(`✅ 수정 완료: ${filePath}`);
      } else {
        console.log(`⚠️ 변경사항 없음: ${filePath}`);
      }

    } catch (error) {
      this.errors.push({
        path: filePath,
        error: error.message
      });
      console.error(`❌ 파일 수정 실패 ${filePath}:`, error.message);
    }
  }

  // 교체 패턴 생성
  generateReplacements(fullMatch, translationKey, originalText) {
    const replacements = [];
    
    // Vue 템플릿 내부인지 확인
    if (this.isInTemplate(fullMatch)) {
      // 템플릿 내부 - {{ $t() }} 형태 사용
      replacements.push(`{{ $t('${translationKey}') }}`);
      replacements.push(`{{$t('${translationKey}')}}`);
    } else {
      // JavaScript 코드 내부
      if (fullMatch.includes('"')) {
        replacements.push(`this.$t('${translationKey}')`);
        replacements.push(`$t('${translationKey}')`);
      } else if (fullMatch.includes("'")) {
        replacements.push(`this.$t("${translationKey}")`);
        replacements.push(`$t("${translationKey}")`);
      } else if (fullMatch.includes('`')) {
        replacements.push(`this.$t('${translationKey}')`);
        replacements.push(`$t('${translationKey}')`);
      }
    }
    
    return replacements;
  }

  // 템플릿 내부인지 확인
  isInTemplate(text) {
    // 간단한 휴리스틱: HTML 태그나 Vue 디렉티브가 있으면 템플릿
    return /<[^>]+>/.test(text) || /v-/.test(text) || /:/.test(text) || /@/.test(text);
  }

  // 정규식 이스케이프
  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 번역 파일 업데이트
  updateTranslationFiles(translationUpdates) {
    console.log('\n📝 번역 파일 업데이트 중...');
    
    const locales = ['ko', 'en', 'vi'];
    
    locales.forEach(locale => {
      const filePath = path.join(this.srcDir, `i18n/locales/${locale}.json`);
      
      try {
        // 기존 번역 파일 로드
        let existingTranslations = {};
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          existingTranslations = JSON.parse(content);
        }
        
        // 새로운 키 추가 (기존 키는 유지)
        const updates = translationUpdates[locale] || {};
        const updatedTranslations = {
          ...existingTranslations,
          ...updates
        };
        
        // 파일 백업
        if (fs.existsSync(filePath)) {
          this.backupFile(filePath);
        }
        
        // 업데이트된 번역 파일 저장 (정렬된 형태로)
        const sortedTranslations = this.sortTranslations(updatedTranslations);
        fs.writeFileSync(filePath, JSON.stringify(sortedTranslations, null, 2), 'utf8');
        
        console.log(`✅ ${locale}.json 업데이트 완료 (${Object.keys(updates).length}개 키 추가)`);
        
      } catch (error) {
        console.error(`❌ ${locale}.json 업데이트 실패:`, error.message);
        this.errors.push({
          path: filePath,
          error: error.message
        });
      }
    });
  }

  // 번역 객체 정렬
  sortTranslations(translations) {
    const sorted = {};
    Object.keys(translations).sort().forEach(key => {
      sorted[key] = translations[key];
    });
    return sorted;
  }

  // 리포트 파일 로드
  loadReport() {
    try {
      if (!fs.existsSync(this.reportPath)) {
        throw new Error(`리포트 파일이 없습니다: ${this.reportPath}`);
      }
      
      const content = fs.readFileSync(this.reportPath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error('❌ 리포트 파일 로드 실패:', error.message);
      console.log('💡 먼저 find-hardcoded-text.js 스크립트를 실행하세요.');
      process.exit(1);
    }
  }

  // 결과 리포트 생성
  generateReport() {
    console.log('\n📊 수정 결과 리포트');
    console.log('='.repeat(50));
    console.log(`✅ 수정된 파일: ${this.fixedFiles.length}개`);
    console.log(`❌ 오류 발생: ${this.errors.length}개`);
    
    if (this.fixedFiles.length > 0) {
      console.log('\n수정된 파일 목록:');
      this.fixedFiles.forEach(file => {
        console.log(`  📄 ${file.path} (${file.changesCount}개 변경)`);
        console.log(`     백업: ${file.backup}`);
      });
    }
    
    if (this.errors.length > 0) {
      console.log('\n오류 발생 파일:');
      this.errors.forEach(error => {
        console.log(`  ❌ ${error.path}: ${error.error}`);
      });
    }
    
    // 결과를 파일로 저장
    const reportData = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFixed: this.fixedFiles.length,
        totalErrors: this.errors.length,
        backupLocation: this.backupDir
      }
    };
    
    const reportPath = path.join(__dirname, '../translation-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2), 'utf8');
    console.log(`\n📄 상세 리포트: ${reportPath}`);
  }

  // 메인 실행 함수
  run() {
    console.log('🔧 번역 자동 수정 시작...\n');
    
    // 백업 디렉토리 생성
    this.ensureBackupDir();
    
    // 리포트 로드
    const report = this.loadReport();
    
    if (!report.files || report.files.length === 0) {
      console.log('✅ 수정할 하드코딩된 텍스트가 없습니다!');
      return;
    }
    
    console.log(`📋 수정 대상: ${report.files.length}개 파일, ${report.summary.totalTexts}개 텍스트\n`);
    
    // 각 파일 수정
    report.files.forEach(fileData => {
      console.log(`🔧 수정 중: ${fileData.path}`);
      this.fixVueFile(fileData);
    });
    
    // 번역 파일 업데이트
    if (report.translationUpdates) {
      this.updateTranslationFiles(report.translationUpdates);
    }
    
    // 결과 리포트 생성
    this.generateReport();
    
    console.log('\n✅ 번역 자동 수정 완료!');
    console.log('💡 변경사항을 확인하고 필요시 번역을 검토하세요.');
    console.log(`📁 백업 파일 위치: ${this.backupDir}`);
  }
}

// 스크립트 실행
if (require.main === module) {
  const fixer = new TranslationFixer();
  fixer.run();
}

module.exports = TranslationFixer;