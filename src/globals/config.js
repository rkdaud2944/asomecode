import serial from '@/globals/serial';

/**
 * 런타임에 결정되는 환경변수를 관리한다.
 */
export default { 
    pythonUrl() {
        if (serial.getBoardType() == "Pro") {
            // asomecode-web
            // return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Pro/asomecar/`;
            return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Pro/asomekit/`;
        } else {
            return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Zet/v1.8.7/`;
        }
    },
} 