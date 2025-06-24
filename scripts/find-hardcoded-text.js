// scripts/find-hardcoded-text.js
// 하드코딩된 텍스트를 찾아서 번역 키로 변환하는 스크립트

const fs = require('fs');
const path = require('path');

class HardcodedTextFinder {
  constructor() {
    this.srcDir = path.join(__dirname, '../src');
    this.hardcodedTexts = new Set();
    this.existingKeys = new Set();
    this.fileResults = [];
    
    // 한글 텍스트 매칭 패턴들
    this.patterns = [
      // Vue 템플릿 내 한글 텍스트
      /(?<![\$\w])(['"`])([^'"`]*[\u3131-\u318E\uAC00-\uD7A3][^'"`]*)\1/g,
      // HTML 속성 값 내 한글
      /(\w+)=(['"`])([^'"`]*[\u3131-\u318E\uAC00-\uD7A3][^'"`]*)\2/g,
      // 일반 문자열 내 한글 (따옴표로 감싸진)
      /(?<![a-zA-Z0-9_])(['"`])([^'"`]*[\u3131-\u318E\uAC00-\uD7A3][^'"`]*)\1/g,
      // 객체 속성으로 된 한글
      /(\w+):\s*(['"`])([^'"`]*[\u3131-\u318E\uAC00-\uD7A3][^'"`]*)\2/g,
    ];
    
    // 제외할 패턴들
    this.excludePatterns = [
      /console\.(log|warn|error|info)/,
      /\$t\(['"`]/,
      /this\.\$t\(['"`]/,
      /i18n\.global\.t\(['"`]/,
      /import.*from/,
      /\/\/.*$/,
      /\/\*[\s\S]*?\*\//,
      /<!--[\s\S]*?-->/,
    ];
  }

  // 기존 번역 키 로드
  loadExistingKeys() {
    try {
      const koJsonPath = path.join(this.srcDir, 'i18n/locales/ko.json');
      if (fs.existsSync(koJsonPath)) {
        const koData = JSON.parse(fs.readFileSync(koJsonPath, 'utf8'));
        Object.keys(koData).forEach(key => this.existingKeys.add(key));
      }
      console.log(`✅ 기존 번역 키 ${this.existingKeys.size}개 로드 완료`);
    } catch (error) {
      console.warn('⚠️ 기존 번역 키 로드 실패:', error.message);
    }
  }

  // 파일이 검사 대상인지 확인
  shouldProcessFile(filePath) {
    const ext = path.extname(filePath);
    const validExts = ['.vue', '.js', '.ts', '.jsx', '.tsx'];
    
    // node_modules, dist, build 폴더 제외
    if (filePath.includes('node_modules') || 
        filePath.includes('/dist/') || 
        filePath.includes('/build/')) {
      return false;
    }
    
    return validExts.includes(ext);
  }

  // 텍스트가 제외 대상인지 확인
  shouldExcludeText(text, line) {
    // 이미 번역 함수를 사용하는 라인인지 확인
    if (this.excludePatterns.some(pattern => pattern.test(line))) {
      return true;
    }
    
    // 영어나 숫자만 포함된 텍스트 제외
    if (!/[\u3131-\u318E\uAC00-\uD7A3]/.test(text)) {
      return true;
    }
    
    // 너무 짧거나 긴 텍스트 제외
    if (text.length < 2 || text.length > 200) {
      return true;
    }
    
    // CSS 클래스나 ID 제외
    if (/^[\w-]+$/.test(text) && text.length < 20) {
      return true;
    }
    
    // 파일 경로나 URL 제외
    if (/^[\.\/]/.test(text) || text.includes('://')) {
      return true;
    }
    
    return false;
  }

  // 번역 키 생성
  generateTranslationKey(text) {
    // 이미 존재하는 키인지 확인
    if (this.existingKeys.has(text)) {
      return text;
    }
    
    // 특수문자 제거하고 공백을 언더스코어로 변경
    let key = text
      .replace(/[<>{}[\]()]/g, '') // HTML 태그 등 제거
      .replace(/\s+/g, '_')        // 공백을 언더스코어로
      .replace(/[^\w가-힣_]/g, '') // 한글, 영문, 숫자, 언더스코어만 유지
      .substring(0, 50);           // 최대 50자로 제한
    
    // 키가 숫자로 시작하면 접두사 추가
    if (/^\d/.test(key)) {
      key = 'text_' + key;
    }
    
    // 중복 키 방지
    let finalKey = key;
    let counter = 1;
    while (this.existingKeys.has(finalKey) && finalKey !== text) {
      finalKey = `${key}_${counter}`;
      counter++;
    }
    
    return finalKey;
  }

  // 파일에서 하드코딩된 텍스트 찾기
  findHardcodedInFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const fileResult = {
        path: filePath,
        hardcodedTexts: []
      };

      lines.forEach((line, lineNumber) => {
        // 이미 번역 함수를 사용하는 라인은 스킵
        if (this.excludePatterns.some(pattern => pattern.test(line))) {
          return;
        }

        this.patterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(line)) !== null) {
            const fullMatch = match[0];
            const text = match[2] || match[3]; // 그룹에 따라 텍스트 추출
            
            if (!this.shouldExcludeText(text, line)) {
              const translationKey = this.generateTranslationKey(text);
              
              fileResult.hardcodedTexts.push({
                lineNumber: lineNumber + 1,
                originalText: text,
                fullMatch: fullMatch,
                line: line.trim(),
                translationKey: translationKey,
                suggestedReplacement: this.generateReplacement(fullMatch, translationKey)
              });
              
              this.hardcodedTexts.add(text);
              this.existingKeys.add(translationKey);
            }
          }
        });
      });

      if (fileResult.hardcodedTexts.length > 0) {
        this.fileResults.push(fileResult);
      }

    } catch (error) {
      console.error(`❌ 파일 처리 오류 ${filePath}:`, error.message);
    }
  }

  // 교체 코드 생성
  generateReplacement(originalMatch, translationKey) {
    // Vue 템플릿에서 사용할 형태로 변환
    if (originalMatch.includes('"')) {
      return `{{ $t('${translationKey}') }}`;
    } else if (originalMatch.includes("'")) {
      return `{{ $t('${translationKey}') }}`;
    } else if (originalMatch.includes('`')) {
      return `{{ $t('${translationKey}') }}`;
    }
    
    return `$t('${translationKey}')`;
  }

  // 디렉토리 재귀 탐색
  scanDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.scanDirectory(fullPath);
        } else if (this.shouldProcessFile(fullPath)) {
          this.findHardcodedInFile(fullPath);
        }
      });
    } catch (error) {
      console.error(`❌ 디렉토리 스캔 오류 ${dirPath}:`, error.message);
    }
  }

  // 번역 파일 업데이트 제안 생성
  generateTranslationUpdates() {
    const updates = {
      ko: {},
      en: {},
      vi: {}
    };

    this.fileResults.forEach(fileResult => {
      fileResult.hardcodedTexts.forEach(item => {
        const key = item.translationKey;
        const text = item.originalText;
        
        // 한국어는 원본 텍스트 사용
        updates.ko[key] = text;
        
        // 영어와 베트남어는 번역 필요 표시
        updates.en[key] = `[TODO: ${text}]`;
        updates.vi[key] = `[TODO: ${text}]`;
      });
    });

    return updates;
  }

  // 결과 리포트 생성
  generateReport() {
    console.log('\n🔍 하드코딩된 텍스트 검사 결과');
    console.log('='.repeat(50));
    console.log(`📊 검사된 파일: ${this.fileResults.length}개`);
    console.log(`🚨 하드코딩된 텍스트: ${this.hardcodedTexts.size}개\n`);

    if (this.fileResults.length === 0) {
      console.log('✅ 하드코딩된 텍스트가 발견되지 않았습니다!');
      return;
    }

    // 파일별 상세 결과
    this.fileResults.forEach(fileResult => {
      console.log(`\n📁 ${fileResult.path}`);
      console.log(`   발견된 텍스트: ${fileResult.hardcodedTexts.length}개`);
      
      fileResult.hardcodedTexts.forEach(item => {
        console.log(`   ⚠️  라인 ${item.lineNumber}: "${item.originalText}"`);
        console.log(`      키: ${item.translationKey}`);
        console.log(`      교체: ${item.suggestedReplacement}`);
        console.log(`      원본: ${item.line}`);
        console.log('');
      });
    });

    // 번역 파일 업데이트 제안
    const updates = this.generateTranslationUpdates();
    console.log('\n📝 번역 파일 업데이트 제안:');
    console.log('한국어 (ko.json)에 추가할 키들:');
    Object.entries(updates.ko).forEach(([key, value]) => {
      console.log(`  "${key}": "${value}",`);
    });
  }

  // 자동 수정 제안 파일 생성
  generateFixSuggestions() {
    const suggestions = {
      summary: {
        totalFiles: this.fileResults.length,
        totalTexts: this.hardcodedTexts.size,
        generatedAt: new Date().toISOString()
      },
      files: this.fileResults,
      translationUpdates: this.generateTranslationUpdates()
    };

    const outputPath = path.join(__dirname, '../hardcoded-text-report.json');
    fs.writeFileSync(outputPath, JSON.stringify(suggestions, null, 2), 'utf8');
    console.log(`\n📄 상세 리포트가 생성되었습니다: ${outputPath}`);
    
    return suggestions;
  }

  // 메인 실행 함수
  run() {
    console.log('🚀 하드코딩된 텍스트 검사 시작...\n');
    
    this.loadExistingKeys();
    this.scanDirectory(this.srcDir);
    this.generateReport();
    this.generateFixSuggestions();
    
    console.log('\n✅ 검사 완료!');
    console.log('💡 다음 단계: 발견된 텍스트들을 $t() 함수로 교체하고 번역 파일을 업데이트하세요.');
  }
}

// 스크립트 실행
if (require.main === module) {
  const finder = new HardcodedTextFinder();
  finder.run();
}

module.exports = HardcodedTextFinder;