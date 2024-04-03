<template>
    <div class="list-cts-wrap">
        <div class="list-cts">
            <div> 
                <!-- 여기는 원래 위에 main-mid가 217이어야 하는데 이부분 때문에 177로함, 폰트사이즈 20 상하 여백 10 -->
                <div class="curriculum">
                    
                    <div class="card-wrap"
                        v-for="(card, index) in filteredCards"
                        :key="index"
                        @mousedown="clicked = true"
                        @mouseup ="clicked = false"
                        @click="goToLesson(card.id, card.title, card.txtAge, card.clickBgColor)"
                    >
                        <div class="card">
                            <div class="card-front"
                                :style="{ 
                                    'background': card.bgColor,
                                    transition: 'background-color 0.5s ease, color 0.5s ease',
                                    'backgroundImage': `url(${card.image})`
                            }">
                                <p class="age"
                                    :style="{'color': card.txtAge,
                                    'border': `1px solid ${card.txtAge}`
                                }">
                                    {{ card.age }}
                                </p>
                                <div class="title">
                                    <span> {{ card.title }} </span>
                                    <span class="title-num"
                                        :style="{'color': card.titleNumColor}"> {{ card.titleNum }} </span>
                                </div>
                                <p class="description">{{ card.description }}</p>
                                <div class="curriculum-chapter" 
                                    :style="{
                                        'color': card.txtChapter,
                                        'background-color': card.bgChapter,

                                }">
                                    {{ card.chapter }}
                                </div>
                            </div>

                            <!-- hover -->
                            <div class="card-back"
                                :style="{ 
                                    'background': card.hoverBgColor,
                                    transition: 'background-color 0.5s ease, color 0.5s ease',
                            }">
                                <p class="age NotoSansKR-Regular"
                                    :style="{'color': card.hoverTxtAge,
                                    'border': `1px solid ${card.hoverTxtAge}`
                                }">
                                    {{ card.age }}
                                </p>                                
                                <div class="title">
                                    <span> {{ card.title }} </span>
                                    <span class="title-num"
                                        :style="{'color': card.titleNumColor}"> {{ card.titleNum }} </span>
                                </div>
                                <p class="description Pretendard-Medium">{{ card.description }}</p>

                                <div class="hoverTxt" v-html=" card.hoverTxt"
                                    :style="{'color': card.hoverTxtColor}">
                                </div>

                                <div class="btn-info">
                                    더 알아보기
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>

    <div class="arrow-wrap">
        <span class="arrow-prev"></span>
        <span class="arrow-next"></span>
    </div>
</template>

<script>
import { cards } from "@/data/curriculum-detail";
import VueBase from "@/mixin/vue-base";

export default {
    mixins: [VueBase],
    
    components: {
    },

    setup() {
        return {
            selectedSubjectSetId: localStorage.getItem('selectedSubjectSetId'),
        }
    },

    data() {
        return {
            cards: cards,
        }
    },
    computed: {
        filteredCards() {
            return this.cards.filter(card => card.title === this.$route.query.title);
        }
    }, 

    mounted() {
    },

    methods: {
        goToLesson(id, title, color, clickColor){
            this.$router.push({ path: '/lesson/list', 
                query: { 
                    id: `${id}`,
                    title: `${title}`,
                    color: `${color}`,
                    clickColor: `${clickColor}`
                } 
            });
        }
    }

}
</script>

<style scoped src="@/assets/css/component/selectCurriculum.css"/>
<style scoped src="@/assets/css/font.css"/>
