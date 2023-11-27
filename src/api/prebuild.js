const axios = require('axios');
const path = require('path');
const fs = require('fs');


const instance = axios.create({
    // baseURL: 'http://asomecode-api-dev.eba-jmm2rf3r.ap-northeast-2.elasticbeanstalk.com/',
    baseURL: 'http://localhost:8081/'
});
const dataPath = path.join(__dirname, './staticData/');
const imgPath = path.join(__dirname, './staticData/lesson/images/');

async function fetchDataFromApi(api) {
    try {
        const response = await instance.get(api);

        if (!fs.existsSync(dataPath)) {
            fs.mkdirSync(dataPath, { recursive: true });
            fs.mkdirSync(imgPath, { recursive: true });
        }

        fs.writeFileSync(dataPath + 'lessonAll' + '.json', JSON.stringify(response.data));
    } catch (error) {
        console.error('Error fetching subjects:', error);
    }
}


async function fetchData() {
    // const apis = ['subjects', 'subjectSets', 'lessons']
    const apis = ['lessonAll/4']
    // 지금 subjectSets 에 params를 받은상황

    for (const api of apis) {
        await fetchDataFromApi(api);
    }
}

fetchData();
