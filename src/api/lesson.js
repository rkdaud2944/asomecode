import rest from "@/globals/rest";

export default {
    async create(body) {
        return new Promise((resolve, reject) => {
            var url = "lesson"
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

    async getLessons(params) {
        return new Promise((resolve, reject) => {
            rest.get("lessons", {params})
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

    lessonDetail: async function (id) {
        var url = `/lesson/${id}`;
        return rest.get(url)
    },

    async updateLesson(params, id) {
        return new Promise((resolve, reject) => {
            rest.put(`/lesson/${id}`, params)
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
}