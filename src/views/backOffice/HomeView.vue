<template>
    <div>
        <q-layout view="lHh Lpr lFf">
            <q-header elevated class="glossy">
                <q-toolbar>
                    <q-btn @click="showSideMenu = !showSideMenu" flat dense round aria-label="Menu" icon="menu" />
                    <q-toolbar-title v-bind:style="{flex:'none'}" class="q-btn--26actionable"> Asome IT</q-toolbar-title>
                    <div v-if="showBack">
                        <a class="preview" >
                        미리보기
                        </a>
                        <a class="subject-style">
                            과목 : 미완성 <!-- backend 수정 필요 -->
                            <a class="title-style">
                                제목 : {{ $store.state.boViewTitle }}
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

                    <!-- <div v-if="showBack">
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
                    </div>  -->
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
import { mapState } from 'vuex'

export default {
    
    mixins: [VueBase,],

    components: {
        SideMenu,
        
        ...mapState([
            'boViewTitle'
        ])

    },

    data() {
        return {
            showSideMenu: false,
            subject: {},
            title: null,
            // deliver: null,
        };
    },

    mounted() {
    },


    computed: {
        // 미리보기 창에서만 제목 과목 표시
        showBack() {
        return this.$route.path === '/backOffice/lesson/detail';
        }
    },

    methods: {
        onClickHomeView() {
            this.$router.push({ path: '/'});
        },
        getSubject(id) {
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
    },
};
</script>

<style scoped src="@/assets/css/component/lesson_list.css"/>