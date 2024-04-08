import serial from '@/globals/serial';

/**
 * 런타임에 결정되는 환경변수를 관리한다.
 */
export default { 
    pythonUrl(data) {
        if (serial.getBoardType() == "Pro") {
            // asomecode-web
            // return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Pro/asomecar/`;
            switch (data) {
                case "asomekit":                    
                    return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Pro/asomekit/`;
                case "asomebot":                    
                    return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Pro/asomebot/`;
                case "asomecar-old":                    
                    return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Pro/asomecar-old/`;
                default:
                    return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Pro/asomekit/`;
            }
            
        } else {
            return `https://asomecode-web.s3.ap-northeast-2.amazonaws.com/contents/coding/html/common/py/Zet/v1.8.7/`;
        }
        
    },
} 