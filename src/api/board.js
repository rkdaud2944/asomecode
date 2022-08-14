import rest from "@/utils/rest";

export default {
    async create(body) {
        return new Promise((resolve, reject) => {
            var url = "article"
            rest
                .post(url, body)
                .then((response) => {
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

    async getArticle(id) {
        return new Promise((resolve, reject) => {
            rest.get(`article/${id}`)
                .then(response => {
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

    async createComment(body, id) {
        return new Promise((resolve, reject) => {
            rest
                .post(`comment/${id}`, body)
                .then((response) => {
                    resolve(response);
                })
                .catch((e) => {
                    console.log("서버 오류입니다. 잠시 후에 다시 시도해주세요.")
                    reject(e);
                });
        })
    },

    async createReply(body, id) {
        return new Promise((resolve, reject) => {
            rest
                .post(`reply/${id}`, body)
                .then((response) => {
                    resolve(response);
                })
                .catch((e) => {
                    console.log("서버 오류입니다. 잠시 후에 다시 시도해주세요.")
                    reject(e);
                });
        })
    },
}