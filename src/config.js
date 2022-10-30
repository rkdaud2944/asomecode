import serial from '@/utils/serial';

export default {
    pythonUrl() {
        if (serial.getBoardType() == "Pro") {
            return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Pro/v1.9.3/`;
        } else {
            return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Zet/v1.8.7/`;
        }
    },
}