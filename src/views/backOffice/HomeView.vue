<template>
    <div>
        <q-layout view="lHh Lpr lFf">
            <q-header elevated class="glossy">
                <q-toolbar>
                    <q-btn @click="showSideMenu = !showSideMenu" flat dense round aria-label="Menu" icon="menu" />
                    <q-toolbar-title v-bind:style="{flex:'none'}" class="q-btn--26actionable"> Asome IT</q-toolbar-title>
                    <div v-if="showBack">
                        <a style="
                            color: #1f487e;
                            font-weight: bold;
                            background-color: #c7d2ff;
                            padding: 5px;
                            border-radius: 5px;
                            border: 1px solid #1f487e;">
                        미리보기
                        </a>
                        <a style="padding-left: 30px;">
                            과목 : {{ subject.title }}
                            <a style="padding-left: 20px;">
                                제목 : {{ subject.lessons[$route.query.id-deliver].title }}
                            </a>
                        </a>
                    </div>
                    <q-space> 
                    </q-space>
                    <div v-if="showBack">
                        <q-btn color="red" href="javascript:history.back()" class="gohome" >
                        뒤로가기
                        </q-btn>
                    </div> 
                </q-toolbar>
            </q-header>

            <q-drawer v-model="showSideMenu" bordered class="bg-grey-2">
                <q-list>
                    <q-item-label header class="bg-blue-grey text-white">Menu</q-item-label>
                    <SideMenu />
                </q-list>
            </q-drawer>

            <q-page-container>
                <router-view />
            </q-page-container>
        </q-layout>
    </div>
</template>

<script>
import VueBase from "@/mixin/vue-base";
import SideMenu from "@/components/backOffice/SideMenu";
import apiSubject from "@/api/subject";

export default {
    
    mixins: [VueBase,],

    components: {
        SideMenu,
    },

    data() {
        return {
            showSideMenu: false,
            subject: {},
            deliver: null,
        };
    },

    mounted() {
        this.getSubject(this.$route.query.id)
    },

    watch: {
        '$route.query.id': function(newVal) {
        if (newVal >= 1 && newVal <= 15) {
            this.deliver = 1;
            this.getSubject(1);
        } else if (newVal >= 16 && newVal <= 32) {
            this.deliver = 16;
            this.getSubject(2);
        } else if (newVal >= 33 && newVal <= 47) {
            this.deliver = 33;
            this.getSubject(3);
        } else if (newVal >= 48) {
            this.deliver = 48;
            this.getSubject(4);
        }
    }
},

    computed: {
    showBack() {
      return this.$route.path === '/backOffice/lesson/detail';
    }
  },

    methods: {
        onClickHomeView() {
            this.$router.push({ path: '/'});
        },
        getSubject(id) {
            // console.log(this.$route.query.id);
            // console.log(id);
            if (!id) {
            console.error("id is undefined or null");
            return;
        }
        apiSubject.subjectDetail(id)
            .then((response) => {
            this.subject = response.data;
            })
            .catch(this.showError);
        },
    }
};
</script>

<style scoped src="@/assets/css/component/lesson_list.css"/>