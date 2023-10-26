import rest from "@/globals/rest";

export default {
    async create(body) {
        return new Promise((resolve, reject) => {
            var url = "polly/save/"
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

    async getPolly(params) {
        return new Promise((resolve, reject) => {
            rest.get(`polly/save/${params}`)
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

    async getTTS(text){      
        this.getPolly(text)
            .then(response => {
                const audio = new Audio();

                audio.src = "data:audio/mp3;base64," + response.data;
                audio.play().then(() => {
                    console.log('음악이 재생되고 있습니다.');
                }).catch(error => {
                    console.error('음악 재생 중 오류 발생:', error);
                });

            })
            .catch(error => {
                console.log(error);
            });
    }
}