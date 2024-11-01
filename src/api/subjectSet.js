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

    async createSubjectSet(body) {
        return new Promise((resolve, reject) => {
            var url = "subjectSet"
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

    async updateSubjectSet(id, body) {
        return new Promise((resolve, reject) => {
            var url = `subjectSet/${id}`
            rest.put(url, body)
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

    async deleteSubjectSet(id, params) {
        console.log(params)
        return new Promise((resolve, reject) => {
            rest.delete(`subjectSet/${id}`, { data: params })
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