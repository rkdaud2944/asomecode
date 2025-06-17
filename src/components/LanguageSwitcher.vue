<template>
    <div class="language-switcher">
      <select v-model="locale" @change="onChange">
        <option v-for="(label, code) in locales" :key="code" :value="code">
          {{ label }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  import { useI18n } from 'vue-i18n'
  
  export default {
    name: 'LanguageSwitcher',
    setup() {
      const { locale } = useI18n()
      const locales = {
        ko: '한국어',
        en: 'English',
        vi: 'Tiếng Việt',
        ja: '日本語'
      }
  
      function onChange(event) {
        locale.value = event.target.value
      }
  
      return {
        locales,
        locale,
        onChange
      }
    }
  }
  </script>
  
  <style scoped>
  .language-switcher {
    display: inline-block;
    margin: 0 1rem;
  }
  .language-switcher select {
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
  }
  </style>
  