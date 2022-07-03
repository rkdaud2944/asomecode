import { defineStore } from "pinia";

export const useMemberStore = defineStore("member",  {
    id: "member",

    state: () => ({
        id: 1234,
    }),
});