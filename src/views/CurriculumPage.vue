<template>
    <div>
      <LanguageSwitcher />
      <ul>
        <li v-for="item in curriculums" :key="item.id">
          <h2 v-html="$t(item.title)"></h2>
          <div v-html="$t(item.content)"></div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
  import { fetchCurriculums } from '@/api/curriculum'
  
  export default {
    components: { LanguageSwitcher },
    setup() {
      const { locale } = useI18n()
      const curriculums = ref([])
  
      async function load() {
        const { data } = await fetchCurriculums(locale.value)
        curriculums.value = data
      }
  
      onMounted(load)
      watch(() => locale.value, load)
      return { curriculums }
    }
  }
  </script>
  