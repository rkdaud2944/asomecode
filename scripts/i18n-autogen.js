// scripts/i18n-autogen.js

const fs = require('fs').promises
const fetch = require('node-fetch')  // npm install node-fetch@2

// 번역할 LibreTranslate URL (로컬 Docker 인스턴스 권장)
const API_URL = 'http://localhost:5000/translate'

// 단일 문자열 번역
async function translate(text, target) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: text, source: 'ko', target, format: 'text' })
  })
  const json = await res.json()
  return json.translatedText
}

// 여러 키 일괄 번역
async function batchTranslate(keys, target) {
  const result = {}
  await Promise.all(
    keys.map(async key => {
      try {
        result[key] = await translate(key, target)
      } catch {
        result[key] = key
      }
    })
  )
  return result
}

async function run() {
  // ko.json 파일 읽기
  const ko = JSON.parse(await fs.readFile('src/i18n/locales/ko.json', 'utf-8'))
  const originals = Object.values(ko)
  const langs = ['en','vi','ja']

  for (const lang of langs) {
    console.log(`▶ Translating to ${lang}...`)
    const mapping = await batchTranslate(originals, lang)
    await fs.writeFile(
      `src/i18n/locales/${lang}.json`,
      JSON.stringify(mapping, null, 2),
      'utf-8'
    )
    console.log(`✔ src/i18n/locales/${lang}.json 생성 완료`)
  }
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
