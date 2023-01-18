import rest from "@/globals/rest";

export default {
    getSubjectSet: async function (id) {
        if (id == null || id == 'null' || id == 'undefined') {
            return rest.get('/subjectSet')
        }

        var url = `/subjectSet?id=${id}`;
        return rest.get(url)
    },

    async getSubjectSets(params) {
        return new Promise((resolve, reject) => {
            rest.get("subjectSets", { params })
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