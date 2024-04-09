<template>
    <q-page>
        <div class="main-wrap">
            <div class="main-mid">
                <div>
                    <h3 class="Pretendard-Medium">커리큘럼 선택</h3>
                    <p class="Pretendard-Regular">어썸아이티만의 코딩 학습 전용 프로그램 체험해 보세요.</p>
                </div>
            </div>
            <CurriculumDetail/>
        </div>
        <!-- <div v-if="id === 'AsomeKit'">Lesson 1의 내용입니다.</div> -->
    </q-page>
</template>

<script>
import CurriculumDetail from "@/components/CurriculumDetail.vue";

export default {
    components: {
        CurriculumDetail
    },

    coomputed:{
        lessonId() {
            // console.log(this.$route.params.id);
            // return this.$route.params.id;
        }
    }

}
</script>


<style scoped src="@/assets/css/component/selectCurriculum.css"/>
<style scoped src="@/assets/css/font.css"/>