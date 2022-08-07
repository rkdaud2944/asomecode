import rest from "@/utils/rest";

export default {
    async create(body) {
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

    async getArticles(params) {
        return new Promise((resolve, reject) => {
            rest.get("articles", { params })
                .then(response => {
                    console.log(response.data);
                    if (response.data.resultCode) {
                        reject(response);
                        return;
                    }

                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    },

    async deleteArticle(id, password) {
        return new Promise((resolve, reject) => {
            rest.delete(`article/${id}`, {data: {"password": password}})
                .then(response => {
                    console.log(response.data);
                    if (response.data.resultCode) {
                        reject(response);
                        return;
                    }
                    resolve(response);
                })
                .catch(error => {
                    console.log(error);
                });
        });
    },
}