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
}