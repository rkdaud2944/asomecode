import rest from "@/utils/rest";

export default {
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