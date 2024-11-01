<template>
    <q-page>
        <div class="main-wrap">
            <div class="main-mid">
                <div>
                    <h3 class="Pretendard-Medium">커리큘럼 선택</h3>
                    <p class="Pretendard-Regular">어썸아이티만의 코딩 학습 전용 프로그램 체험해 보세요.</p>
                    <p class="Pretendard-Regular" style="font-size: 15px; color: red;">※ 구형 어썸보드(어썸코드 Zet버전)를 사용하실 경우, 어썸키트(조립형) 커리큘럼이 나오지 않을 수 있습니다.</p>
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
        }
    }

}
</script>


<style scoped src="@/assets/css/component/selectCurriculum.css"/>
<style scoped src="@/assets/css/font.css"/>