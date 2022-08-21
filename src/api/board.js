import rest from "@/utils/rest";

export default {
    async create(body) {
        return new Promise((resolve, reject) => {
            var url = "article"
            rest.post(url, body)
                .then(response => {
                    if (response.data.resultCode) {
                        reject(response);
                        return;
                    }
                    resolve(response);
                }).catch(error => {
                    console.log(error);
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
                }).catch(error => {
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

    async deleteArticle(type, id, password) {
        return new Promise((resolve, reject) => {
            rest.delete(`${type}/${id}`, { data: { "password": password } })
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
            rest.post(`comment/${id}`, body)
                .then(response => {
                    if (response.data.resultCode) {
                        reject(response);
                        return;
                    }
                    resolve(response);
                }).catch(error => {
                    console.log(error);
                });
        })
    },

    async createReply(body, id) {
        return new Promise((resolve, reject) => {
            rest.post(`reply/${id}`, body)
                .then(response => {
                    if (response.data.resultCode) {
                        reject(response);
                        return;
                    }
                    resolve(response);
                }).catch(error => {
                    console.log(error);
                });
        })
    },
}