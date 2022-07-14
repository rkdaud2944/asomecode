import rest from "@/utils/rest";

export default {
    defaultSubjectSet: async function () {
        var url = `/asomeit/api/default/subjectSet`;
        return rest.get(url)
    },

    subjectDetail: async function (id) {
        var url = `/asomeit/api/subject/${id}`;
        return rest.get(url)
    },
}