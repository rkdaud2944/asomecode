import globals from "@/globals/globals";
import axios from "axios";
import {useMemberStore} from "@/store/member";

/**
 * 오류 정보를 로그 서버로 전송
 */
export default {
    sendMessage(text) {
        const member = useMemberStore();
        let memberId = 0;
        try {
            memberId = member.id;
        } catch (e) {
            console.log(e);
        }

        const request = {
            memberId: memberId,
            module: globals.currentPath,
            errorCode: 0,
            errorMsg: text
        };

        try {
            axios.post(process.env.VUE_APP_API_BASEURL + 'error', request);
        } catch (e) {
            console.log(e);
        }
    }
}