import rest from "@/utils/rest";

export default {
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