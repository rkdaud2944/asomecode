const messages = [];

messages[1] = "가입이 필요한 회원입니다.";
messages[2] = "요청 데이터가 잘못되었습니다.";
messages[3] = "회원 정보를 찾을 수 없습니다.";
messages[4] = "탈퇴한 회원입니다.";
messages[5] = "관리자에 의해 정지된 회원입니다.";
messages[6] = "sns 타입 입력이 잘못 되었습니다.";
messages[7] = "필수 약관 동의를 체크해야 합니다.";
messages[8] = "금지된 단어가 포함되어 있습니다.";
messages[9] = "올바른 전화번호 형식이 아닙니다.";
messages[10] = "SNS 인증 오류입니다.";

// CRM 100
messages[101] = "발행된 인증번호가 없습니다.";
messages[102] = "인증번호를 다시 입력해주세요.";
messages[103] = "인증번호가 만료되었습니다.";
messages[104] = "이미 인증된 메일주소 입니다.";
messages[105] = "이미 사용중인 닉네임 입니다.";
messages[106] = "토큰 기한이 만료 되었습니다.";
messages[107] = "알림 정보를 찾을 수 없습니다.";
messages[108] = "토큰 정보가 유효하지 않습니다.";
messages[109] = "닉네임은 2자 이상 12자 이하의 한글, 영문, 숫자로만 가능합니다.";
messages[110] = "올바른 이메일 형식이 아닙니다.";
messages[111] = "금지된 닉네임 입니다.";
messages[112] = "이미 차단된 회원 입니다.";
messages[113] = "이미 해제된 회원 입니다.";
messages[114] = "팔로우 하려는 회원이 내가 차단된 회원입니다.";
messages[115] = "이미 사용중인 전화번호 입니다.";

export default {
    get: function (code) {
        return messages[code];
    },
};
