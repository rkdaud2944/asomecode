import rest from "@/globals/rest";
// import serial from "@/globals/serial";
import speaker from "@/globals/speaker-manager"

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
                    reject(response.data);
                    return;
                }
                resolve(response.data);
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

                audio.src = "data:audio/mp3;base64," + response;
                audio.play().then(() => {
                    console.log('음성이 재생되고 있습니다.');
                }).catch(error => {
                    console.error('음성 재생 중 오류 발생:', error);
                });
            })
            .catch(error => {
                console.log(error);
            });
    },

    async saveToBoard(fileName,text){
        this.getPolly(text)
            .then(response => {
                speaker.save(fileName,response)
            }).catch(error => {
                console.error('음성 재생 중 오류 발생:', error);
            });
    },

    async tempAudio(text) {
        try {
            await this.saveToBoard('temp', text);
            sessionStorage.setItem('audioTemp','temp');
        } catch (error) {
            console.error('임시저장 음성 저장/실행 중 오류 발생:', error);
        }
    },

    play(text){
        speaker.play(text);
    },
    
    remove(text){
        speaker.remove(text);
    }

}