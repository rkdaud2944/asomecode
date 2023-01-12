import rest from "@/globals/rest";

export default {
    getSubjectSet: async function (id) {
        if (id == null || id == 'null' || id == 'undefined') {
            return rest.get('/subjectSet')
        }

        var url = `/subjectSet?id=${id}`;
        return rest.get(url)
    },

    subjectDetail: async function (id) {
        var url = `/subject/${id}`;
        return rest.get(url)
    },

    async getSubjects(params) {
        return new Promise((resolve, reject) => {
            rest.get("subjects", { params })
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

    async createSubject(body) {
        return new Promise((resolve, reject) => {
            var url = "subject"
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

    async updateSubject(id, body) {
        return new Promise((resolve, reject) => {
            var url = `subject/${id}`
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

    async deleteSubject(id, params) {
        console.log(params)
        return new Promise((resolve, reject) => {
            rest.delete(`subject/${id}`, { data: params })
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