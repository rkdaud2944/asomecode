// scripts/complete-ui-translation-fix.js
// UI에서 발견된 모든 하드코딩 텍스트를 일괄 수정하는 스크립트

const fs = require('fs');
const path = require('path');

class CompleteUITranslationFix {
  constructor() {
    this.srcDir = path.join(__dirname, '../src');
    this.fixedFiles = [];
    this.errors = [];
    
    // 캡처에서 발견된 하드코딩 텍스트들과 올바른 번역 키 매핑
    this.uiTextMappings = {
      // 메인 헤더 영역
      'Curriculum': 'curriculum',
      'IoT 스마트 키트': 'iot_smart_kit',
      'Asomekit': 'asomekit',
      '32차': 'lesson_32',
      'Tiểu học trở lên': 'elementary_and_above',
      
      // 모달 창
      '업데이트할 교구를 선택하세요': 'select_device_to_update',
      '업데이트할 교구를 선택하세요.': 'select_device_to_update',
      'AsomeIT': 'asomeit_brand',
      '이어봇': 'earbot',
      '어썸키트': 'asomekit',
      '진행하기': 'proceed',
      '닫기': 'close',
      '취소': 'cancel',
      
      // 우측 패널
      '어썸코드 사용법': 'awesome_code_usage_guide',
      '용인원 학습 프로그램': 'yongin_learning_program',
      '자동실행 프로그램': 'auto_run_program',
      '실행하기': 'execute',
      
      // 네비게이션 및 공통 UI
      '블록코딩': 'block_coding',
      '자료실': 'resource_center',
      '도움말': 'help',
      '연결하기': 'connect',
      '연결 끊기': 'disconnect',
      '업로드': 'upload',
      '다운로드': 'download',
      '저장': 'save',
      '불러오기': 'load',
      '새로 만들기': 'create_new',
      '파일 열기': 'open_file',
      
      // 상태 메시지
      '연결됨': 'connected',
      '연결 안됨': 'disconnected',
      '연결 중...': 'connecting',
      '업로드 중...': 'uploading',
      '완료': 'complete',
      '실패': 'failed',
      '오류': 'error',
      
      // 폼 라벨
      '제목': 'title',
      '설명': 'description',
      '이름': 'name',
      '파일명': 'filename',
      '경로': 'path',
      '크기': 'size',
      '날짜': 'date',
      
      // 버튼 텍스트
      '확인': 'confirm',
      '적용': 'apply',
      '재설정': 'reset',
      '삭제': 'delete',
      '편집': 'edit',
      '복사': 'copy',
      '붙여넣기': 'paste',
      '실행': 'run',
      '정지': 'stop',
      '일시정지': 'pause',
      '계속': 'continue',
      
      // 메뉴 항목
      '파일': 'file',
      '편집': 'edit',
      '보기': 'view',
      '도구': 'tools',
      '설정': 'settings',
      '도움말': 'help',
      
      // 교구 이름들
      '어썸보드': 'awesomeboard',
      '어썸봇': 'awesomebot', 
      '어썸카': 'awesomecar',
      '어썸키트': 'awesomekit',
      
      // 과목/카테고리
      '정규과정': 'regular_course',
      '기초과정': 'basic_course',
      '심화과정': 'advanced_course',
      '프로젝트': 'project',
      
      // 언어 관련
      '한국어': 'korean',
      '영어': 'english',
      '베트남어': 'vietnamese',
      'Tiếng Việt': 'vietnamese'
    };
    
    // 파일별 특수 처리가 필요한 텍스트들
    this.specialCases = {
      // 특정 컴포넌트에서만 나타나는 텍스트들
      'SelectCurriculum.vue': {
        'Curriculum': 'curriculum_selection'
      },
      'UpdateModal.vue': {
        '업데이트할 교구를 선택하세요': 'select_device_for_update'
      }
    };
  }

  // 파일 내용에서 하드코딩된 텍스트 찾기 및 교체
  processFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;
      const fileName = path.basename(filePath);
      
      console.log(`🔧 처리 중: ${filePath}`);
      
      // 백업 생성
      const backupPath = filePath + '.backup';
      fs.writeFileSync(backupPath, content);
      
      // 특수 케이스 확인
      const specialMappings = this.specialCases[fileName] || {};
      const allMappings = { ...this.uiTextMappings, ...specialMappings };
      
      // 각 매핑에 대해 교체 수행
      Object.entries(allMappings).forEach(([originalText, translationKey]) => {
        // 다양한 패턴으로 검색 및 교체
        const patterns = [
          // HTML 텍스트 노드
          new RegExp(`(>\\s*)${this.escapeRegex(originalText)}(\\s*<)`, 'g'),
          // 따옴표로 감싸진 문자열
          new RegExp(`(['"])(${this.escapeRegex(originalText)})\\1`, 'g'),
          // Vue 템플릿 보간법
          new RegExp(`({{\\s*)${this.escapeRegex(originalText)}(\\s*}})`, 'g'),
          // 속성 값
          new RegExp(`(\\w+=['"])${this.escapeRegex(originalText)}(['"])`, 'g'),
          // placeholder, title 등의 속성
          new RegExp(`(placeholder=['"])${this.escapeRegex(originalText)}(['"])`, 'g'),
          new RegExp(`(title=['"])${this.escapeRegex(originalText)}(['"])`, 'g'),
          // Vue 디렉티브 내부
          new RegExp(`(v-\\w+=['"])${this.escapeRegex(originalText)}(['"])`, 'g')
        ];
        
        patterns.forEach(pattern => {
          if (pattern.test(content)) {
            // Vue 템플릿인지 JavaScript인지 확인하여 적절한 번역 함수 사용
            if (filePath.endsWith('.vue')) {
              // Vue 파일의 경우
              content = content.replace(pattern, (match, prefix, text, suffix) => {
                if (prefix.includes('{{')) {
                  // 템플릿 보간법 내부
                  return `${prefix}$t('${translationKey}')${suffix}`;
                } else if (prefix.includes('>')) {
                  // HTML 텍스트 노드
                  return `${prefix}{{ $t('${translationKey}') }}${suffix}`;
                } else if (prefix.includes('=')) {
                  // 속성 값
                  return `${prefix}$t('${translationKey}')${suffix}`;
                } else {
                  // 일반 문자열
                  return `${prefix}$t('${translationKey}')${suffix}`;
                }
              });
            } else {
              // JavaScript 파일의 경우
              content = content.replace(pattern, (match, prefix, text, suffix) => {
                return `${prefix}this.$t('${translationKey}')${suffix}`;
              });
            }
            hasChanges = true;
            console.log(`   ✅ "${originalText}" → $t('${translationKey}')`);
          }
        });
      });
      
      // 특별한 패턴들 처리
      hasChanges = this.handleSpecialPatterns(content, filePath) || hasChanges;
      
      // 변경사항이 있으면 저장
      if (hasChanges) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push({
          path: filePath,
          backup: backupPath
        });
        console.log(`✅ 수정 완료: ${filePath}`);
      } else {
        // 백업 파일 삭제 (변경사항 없음)
        fs.unlinkSync(backupPath);
        console.log(`ℹ️ 변경사항 없음: ${filePath}`);
      }
      
      return hasChanges;
      
    } catch (error) {
      this.errors.push({
        path: filePath,
        error: error.message
      });
      console.error(`❌ 파일 처리 실패 ${filePath}:`, error.message);
      return false;
    }
  }
  
  // 특수 패턴들 처리
  handleSpecialPatterns(content, filePath) {
    let hasChanges = false;
    
    // Vue 컴포넌트의 data, computed, methods 내부 문자열
    const jsStringPattern = /(\w+:\s*['"])([^'"]*[\u3131-\u318E\uAC00-\uD7A3][^'"]*)\2/g;
    content = content.replace(jsStringPattern, (match, prefix, text) => {
      const key = this.generateTranslationKey(text);
      hasChanges = true;
      return `${prefix}this.$t('${key}')${prefix.slice(-1)}`;
    });
    
    // console.log 등의 디버깅 문자열은 제외하고 처리
    const excludeFromTranslation = [
      /console\.(log|warn|error|info)/,
      /alert\(/,
      /confirm\(/,
      /prompt\(/
    ];
    
    return hasChanges;
  }
  
  // 정규식 이스케이프
  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  // 번역 키 생성
  generateTranslationKey(text) {
    return text
      .replace(/[^\w가-힣\s]/g, '')
      .replace(/\s+/g, '_')
      .toLowerCase()
      .substring(0, 50);
  }
  
  // 번역 파일 업데이트
  updateTranslationFiles() {
    console.log('\n📝 번역 파일 업데이트 중...');
    
    const newTranslations = {
      ko: {
        // UI 요소들
        'curriculum': '커리큘럼',
        'curriculum_selection': '커리큘럼 선택',
        'iot_smart_kit': 'IoT 스마트 키트',
        'asomekit': '어썸키트',
        'lesson_32': '32차',
        'elementary_and_above': '초등 이상',
        
        // 모달 및 대화상자
        'select_device_to_update': '업데이트할 교구를 선택하세요',
        'select_device_for_update': '업데이트할 교구를 선택하세요',
        'asomeit_brand': 'AsomeIT',
        'earbot': '이어봇',
        'proceed': '진행하기',
        'close': '닫기',
        'cancel': '취소',
        
        // 우측 패널
        'awesome_code_usage_guide': '어썸코드 사용법',
        'yongin_learning_program': '용인원 학습 프로그램',
        'auto_run_program': '자동실행 프로그램',
        'execute': '실행하기',
        
        // 네비게이션
        'block_coding': '블록코딩',
        'resource_center': '자료실',
        'help': '도움말',
        'connect': '연결하기',
        'disconnect': '연결 끊기',
        'upload': '업로드',
        'download': '다운로드',
        'save': '저장',
        'load': '불러오기',
        'create_new': '새로 만들기',
        'open_file': '파일 열기',
        
        // 상태
        'connected': '연결됨',
        'disconnected': '연결 안됨',
        'connecting': '연결 중...',
        'uploading': '업로드 중...',
        'complete': '완료',
        'failed': '실패',
        'error': '오류',
        
        // 폼
        'title': '제목',
        'description': '설명',
        'name': '이름',
        'filename': '파일명',
        'path': '경로',
        'size': '크기',
        'date': '날짜',
        
        // 버튼
        'confirm': '확인',
        'apply': '적용',
        'reset': '재설정',
        'delete': '삭제',
        'edit': '편집',
        'copy': '복사',
        'paste': '붙여넣기',
        'run': '실행',
        'stop': '정지',
        'pause': '일시정지',
        'continue': '계속',
        
        // 메뉴
        'file': '파일',
        'view': '보기',
        'tools': '도구',
        'settings': '설정',
        
        // 교구
        'awesomeboard': '어썸보드',
        'awesomebot': '어썸봇',
        'awesomecar': '어썸카',
        
        // 과정
        'regular_course': '정규과정',
        'basic_course': '기초과정',
        'advanced_course': '심화과정',
        'project': '프로젝트',
        
        // 언어
        'korean': '한국어',
        'english': '영어',
        'vietnamese': '베트남어'
      },
      en: {
        // UI elements
        'curriculum': 'Curriculum',
        'curriculum_selection': 'Select Curriculum',
        'iot_smart_kit': 'IoT Smart Kit',
        'asomekit': 'AsomeKit',
        'lesson_32': 'Lesson 32',
        'elementary_and_above': 'Elementary and above',
        
        // Modal and dialogs
        'select_device_to_update': 'Select device to update',
        'select_device_for_update': 'Select device for update',
        'asomeit_brand': 'AsomeIT',
        'earbot': 'EarBot',
        'proceed': 'Proceed',
        'close': 'Close',
        'cancel': 'Cancel',
        
        // Right panel
        'awesome_code_usage_guide': 'AwesomeCode Usage Guide',
        'yongin_learning_program': 'Yongin Learning Program',
        'auto_run_program': 'Auto-run Program',
        'execute': 'Execute',
        
        // Navigation
        'block_coding': 'Block Coding',
        'resource_center': 'Resource Center',
        'help': 'Help',
        'connect': 'Connect',
        'disconnect': 'Disconnect',
        'upload': 'Upload',
        'download': 'Download',
        'save': 'Save',
        'load': 'Load',
        'create_new': 'Create New',
        'open_file': 'Open File',
        
        // Status
        'connected': 'Connected',
        'disconnected': 'Disconnected',
        'connecting': 'Connecting...',
        'uploading': 'Uploading...',
        'complete': 'Complete',
        'failed': 'Failed',
        'error': 'Error',
        
        // Form
        'title': 'Title',
        'description': 'Description',
        'name': 'Name',
        'filename': 'Filename',
        'path': 'Path',
        'size': 'Size',
        'date': 'Date',
        
        // Buttons
        'confirm': 'Confirm',
        'apply': 'Apply',
        'reset': 'Reset',
        'delete': 'Delete',
        'edit': 'Edit',
        'copy': 'Copy',
        'paste': 'Paste',
        'run': 'Run',
        'stop': 'Stop',
        'pause': 'Pause',
        'continue': 'Continue',
        
        // Menu
        'file': 'File',
        'view': 'View',
        'tools': 'Tools',
        'settings': 'Settings',
        
        // Devices
        'awesomeboard': 'AwesomeBoard',
        'awesomebot': 'AwesomeBot',
        'awesomecar': 'AwesomeCar',
        
        // Courses
        'regular_course': 'Regular Course',
        'basic_course': 'Basic Course',
        'advanced_course': 'Advanced Course',
        'project': 'Project',
        
        // Languages
        'korean': 'Korean',
        'english': 'English',
        'vietnamese': 'Vietnamese'
      },
      vi: {
        // UI elements
        'curriculum': 'Chương trình giảng dạy',
        'curriculum_selection': 'Chọn chương trình giảng dạy',
        'iot_smart_kit': 'Bộ kit IoT thông minh',
        'asomekit': 'AsomeKit',
        'lesson_32': 'Bài 32',
        'elementary_and_above': 'Tiểu học trở lên',
        
        // Modal and dialogs
        'select_device_to_update': 'Chọn thiết bị để cập nhật',
        'select_device_for_update': 'Chọn thiết bị để cập nhật',
        'asomeit_brand': 'AsomeIT',
        'earbot': 'EarBot',
        'proceed': 'Tiến hành',
        'close': 'Đóng',
        'cancel': 'Hủy',
        
        // Right panel
        'awesome_code_usage_guide': 'Hướng dẫn sử dụng AwesomeCode',
        'yongin_learning_program': 'Chương trình học Yongin',
        'auto_run_program': 'Chương trình tự động',
        'execute': 'Thực thi',
        
        // Navigation
        'block_coding': 'Lập trình khối',
        'resource_center': 'Trung tâm tài nguyên',
        'help': 'Trợ giúp',
        'connect': 'Kết nối',
        'disconnect': 'Ngắt kết nối',
        'upload': 'Tải lên',
        'download': 'Tải xuống',
        'save': 'Lưu',
        'load': 'Tải',
        'create_new': 'Tạo mới',
        'open_file': 'Mở tệp',
        
        // Status
        'connected': 'Đã kết nối',
        'disconnected': 'Chưa kết nối',
        'connecting': 'Đang kết nối...',
        'uploading': 'Đang tải lên...',
        'complete': 'Hoàn thành',
        'failed': 'Thất bại',
        'error': 'Lỗi',
        
        // Form
        'title': 'Tiêu đề',
        'description': 'Mô tả',
        'name': 'Tên',
        'filename': 'Tên tệp',
        'path': 'Đường dẫn',
        'size': 'Kích thước',
        'date': 'Ngày',
        
        // Buttons
        'confirm': 'Xác nhận',
        'apply': 'Áp dụng',
        'reset': 'Đặt lại',
        'delete': 'Xóa',
        'edit': 'Chỉnh sửa',
        'copy': 'Sao chép',
        'paste': 'Dán',
        'run': 'Chạy',
        'stop': 'Dừng',
        'pause': 'Tạm dừng',
        'continue': 'Tiếp tục',
        
        // Menu
        'file': 'Tệp',
        'view': 'Xem',
        'tools': 'Công cụ',
        'settings': 'Cài đặt',
        
        // Devices
        'awesomeboard': 'AwesomeBoard',
        'awesomebot': 'AwesomeBot',
        'awesomecar': 'AwesomeCar',
        
        // Courses
        'regular_course': 'Khóa học chính quy',
        'basic_course': 'Khóa học cơ bản',
        'advanced_course': 'Khóa học nâng cao',
        'project': 'Dự án',
        
        // Languages
        'korean': 'Tiếng Hàn',
        'english': 'Tiếng Anh',
        'vietnamese': 'Tiếng Việt'
      }
    };
    
    // 각 언어별 번역 파일 업데이트
    ['ko', 'en', 'vi'].forEach(locale => {
      const filePath = path.join(this.srcDir, `i18n/locales/${locale}.json`);
      
      try {
        // 기존 번역 파일 로드
        let existingTranslations = {};
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          existingTranslations = JSON.parse(content);
        }
        
        // 백업 생성
        if (fs.existsSync(filePath)) {
          fs.writeFileSync(filePath + '.backup', JSON.stringify(existingTranslations, null, 2));
        }
        
        // 새로운 번역 추가 (기존 것은 유지)
        const updatedTranslations = {
          ...existingTranslations,
          ...newTranslations[locale]
        };
        
        // 정렬하여 저장
        const sortedTranslations = this.sortObject(updatedTranslations);
        fs.writeFileSync(filePath, JSON.stringify(sortedTranslations, null, 2), 'utf8');
        
        console.log(`✅ ${locale}.json 업데이트 완료 (${Object.keys(newTranslations[locale]).length}개 키 추가)`);
        
      } catch (error) {
        console.error(`❌ ${locale}.json 업데이트 실패:`, error.message);
        this.errors.push({
          path: filePath,
          error: error.message
        });
      }
    });
  }
  
  // 객체 키 정렬
  sortObject(obj) {
    const sorted = {};
    Object.keys(obj).sort().forEach(key => {
      sorted[key] = obj[key];
    });
    return sorted;
  }
  
  // 디렉토리 스캔
  scanDirectory(dirPath, filePattern = /\.(vue|js|ts|jsx|tsx)$/) {
    const results = [];
    
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // node_modules, dist 등 제외
          if (!['node_modules', 'dist', 'build', '.git'].includes(item)) {
            results.push(...this.scanDirectory(fullPath, filePattern));
          }
        } else if (filePattern.test(item)) {
          results.push(fullPath);
        }
      });
    } catch (error) {
      console.error(`디렉토리 스캔 오류 ${dirPath}:`, error.message);
    }
    
    return results;
  }
  
  // 메인 실행 함수
  run() {
    console.log('🔧 UI 하드코딩 텍스트 완전 수정 시작...\n');
    
    // 처리할 파일들 스캔
    const files = this.scanDirectory(this.srcDir);
    console.log(`📋 스캔된 파일: ${files.length}개\n`);
    
    // 각 파일 처리
    let processedCount = 0;
    files.forEach(filePath => {
      if (this.processFile(filePath)) {
        processedCount++;
      }
    });
    
    console.log(`\n📊 파일 처리 완료: ${processedCount}/${files.length}개 파일 수정됨`);
    
    // 번역 파일 업데이트
    this.updateTranslationFiles();
    
    // 결과 리포트
    this.generateReport();
    
    console.log('\n✅ UI 하드코딩 텍스트 수정 완료!');
    console.log('💡 다음 단계:');
    console.log('   1. 수정된 파일들을 검토하세요');
    console.log('   2. 영어/베트남어 번역을 검토하고 완성하세요');
    console.log('   3. 언어 전환기를 테스트하세요');
  }
  
  // 결과 리포트 생성
  generateReport() {
    console.log('\n📊 수정 결과 리포트');
    console.log('='.repeat(50));
    console.log(`✅ 수정된 파일: ${this.fixedFiles.length}개`);
    console.log(`❌ 오류 발생: ${this.errors.length}개`);
    
    if (this.fixedFiles.length > 0) {
      console.log('\n📝 수정된 파일 목록:');
      this.fixedFiles.forEach(file => {
        console.log(`  ✓ ${file.path}`);
        console.log(`    백업: ${file.backup}`);
      });
    }
    
    if (this.errors.length > 0) {
      console.log('\n❌ 오류 발생 파일:');
      this.errors.forEach(error => {
        console.log(`  ✗ ${error.path}: ${error.error}`);
      });
    }
    
    // 상세 리포트를 JSON 파일로 저장
    const reportData = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesProcessed: this.fixedFiles.length,
        totalErrors: this.errors.length
      },
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      translationMappings: this.uiTextMappings
    };
    
    const reportPath = path.join(__dirname, '../ui-translation-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    console.log(`\n📄 상세 리포트: ${reportPath}`);
  }
}

// 스크립트 실행
if (require.main === module) {
  const fixer = new CompleteUITranslationFix();
  fixer.run();
}

module.exports = CompleteUITranslationFix;