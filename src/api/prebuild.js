const axios = require('axios');
const path = require('path');
const fs = require('fs');


const instance = axios.create({
    baseURL: 'http://asomecode-api-dev.eba-jmm2rf3r.ap-northeast-2.elasticbeanstalk.com/',
});

const dataPath = path.join(__dirname, './staticData/');

async function fetchDataFromApi(api) {
    try {
        const response = await instance.get(api);

        if (!fs.existsSync(dataPath)) {
            fs.mkdirSync(dataPath, { recursive: true });
        }

        // 데이터를 파일로 저장
        fs.writeFileSync(dataPath + api + '.json', JSON.stringify(response.data));
    } catch (error) {
        console.error('Error fetching subjects:', error);
    }
}


// 모든 필요한 데이터를 불러오는 함수
async function fetchData() {
    const apis = ['subjects', 'subjectSets', 'lessons']
    // 지금 subjectSets 에 params를 받은상황

    for (const api of apis) {
        await fetchDataFromApi(api);
    }
    // 필요에 따라 다른 API 호출도 여기에 추가
}

// 데이터 불러오기 실행
fetchData();