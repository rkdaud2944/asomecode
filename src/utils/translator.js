// src/utils/translator.js
// 무료 퍼블릭 LibreTranslate 혹은 로컬 호스트(Docker) 인스턴스 URL
const API_URL = 'http://localhost:5000/translate'  

// 단일 문자열 번역
export async function autoTranslate(text, target) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      q: text,
      source: 'ko',
      target,
      format: 'text'
    })
  })
  const json = await res.json()
  return json.translatedText
}

// 여러 키를 한 번에 번역 (batch)
export async function batchTranslate(keys, target) {
  const result = {}
  await Promise.all(
    keys.map(async key => {
      try {
        result[key] = await autoTranslate(key, target)
      } catch {
        result[key] = key  // 실패 시 원본
      }
    })
  )
  return result
}
