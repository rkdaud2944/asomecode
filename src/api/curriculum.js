// 예: src/api/curriculum.js
import axios from 'axios'

export function fetchCurriculums(locale) {
  return axios.get('/api/curriculums', {
    params: { locale }
  })
}
