import rest from "@/utils/rest";

export default {
    create: async function (body) {
        return new Promise((resolve, reject) => {
            var url = "article"
            rest
                .post(url, body)
                .then((response) => {
                    console.log("response.data", response.data)
                    resolve(response);
                })
                .catch((e) => {
                    console.log("서버 오류입니다. 잠시 후에 다시 시도해주세요.")
                    reject(e);
                });
        })
    },

    list: async function (page, size, boardType) {
        var url = `/articles?page=${page - 1}&size=${size}&boardType=${boardType}`;
        return rest.get(url)
    },
}