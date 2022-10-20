import rest from "@/utils/rest";

export default {
    defaultSubjectSet: async function () {
        var url = `/default/subjectSet`;
        return rest.get(url)
    },

    subjectDetail: async function (id) {
        var url = `/subject/${id}`;
        return rest.get(url)
    },

    async getSubjects(params) {
        return new Promise((resolve, reject) => {
            rest.get("subjects", {params})
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