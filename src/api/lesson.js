import rest from "@/globals/rest";

const fs = require('fs');
const path = require('path');

export default {
    async create(body) {
        return new Promise((resolve, reject) => {
            var url = "lesson"
            rest.post(url, body)
                .then(response => {
                    if (response.data.resultCode) {
                        reject(response);
                        return;
                    }
                    resolve(response);
                }).catch(error => {
                    console.log(error);
                });
        })
    },

    async getLessons(params) {
        return new Promise((resolve, reject) => {
            rest.get("lessons", {params})
            .then(response => {
                if (response.data.resultCode) {
                    reject(response);
                    return;
                }

                resolve(response);
            })
            .catch(error => {
                console.log(error);
            });
        });
    }, 

    async lessonDetailLocal(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join('./src/api/staticData/lessonAll.json'), 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
    
                try {
                    const jsonData = JSON.parse(data);
                    // jsonData 배열의 각 객체를 순회하면서 그 내용을 출력
                    let lesson = null;
                    jsonData.forEach((item) => {
                        if(item.id == id){
                            lesson = item;
                        }
                    });
                    if (lesson == null) {
                        reject(new Error('Lesson not found'));
                        return;
                    }
    
                    resolve(lesson);
                } catch (parseErr) {
                    console.error(parseErr);
                    reject(parseErr);
                }
            });
        });
    },
    

    lessonDetail: async function (id) {
        // var url = `/lesson/${id}`;
        // return rest.get(url)
        return new Promise((resolve, reject) => {
            rest.get(`lesson/${id}`)
            .then(response => {
                if (response.data.resultCode) {
                    reject(response);
                    return;
                }

                resolve(response);
            })
            .catch(error => {
                console.log(error);
            });
        });
    },

    async updateLesson(params, id) {
        return new Promise((resolve, reject) => {
            rest.put(`/lesson/${id}`, params)
            .then(response => {
                if (response.data.resultCode) {
                    reject(response);
                    return;
                }

                resolve(response);
            })
            .catch(error => {
                console.log(error);
            });
        });
    },
}