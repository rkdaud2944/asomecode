import awsS3 from "aws-sdk"
import { v1 as uuidv1 } from "uuid"

export default {
    today: new Date(),
    s3BucketName: process.env.VUE_APP_S3_BUCKET_NAME,
    bucketRegion: "ap-northeast-2",
    identityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,

    uploadLessonImage: async function (file, lessonId) {
        let s3BucketName = this.s3BucketName + `/lesson/images/${lessonId}`

        awsS3.config.update({
            region: this.bucketRegion,
            credentials: new awsS3.CognitoIdentityCredentials({
                IdentityPoolId: this.identityPoolId
            })
        });

        var s3 = new awsS3.S3({
            apiVersion: '2006-03-01',
            params: {
                Bucket: s3BucketName
            }
        });

        let filExtension = file.name.substr(file.name.lastIndexOf('.'))

        return new Promise((resolve, reject) => {
            s3.upload({
                Key: uuidv1(this.today) + filExtension,
                Body: file,
                ACL: 'public-read'
            }, (err, data) => {
                if (err) {
                    console.log(err)
                    reject(err);
                }
                resolve(data.Location)
            })
        });
    },

    uploadLessonVideo: async function (file, lessonId) {
        let s3BucketName = this.s3BucketName + `/lesson/videos/${lessonId}`

        awsS3.config.update({
            region: this.bucketRegion,
            credentials: new awsS3.CognitoIdentityCredentials({
                IdentityPoolId: this.identityPoolId
            })
        });

        var s3 = new awsS3.S3({
            apiVersion: '2006-03-01',
            params: {
                Bucket: s3BucketName
            }
        });

        let filExtension = file.name.substr(file.name.lastIndexOf('.'))

        return new Promise((resolve, reject) => {
            s3.upload({
                Key: uuidv1(this.today) + filExtension,
                Body: file,
                ACL: 'public-read'
            }, (err, data) => {
                if (err) {
                    console.log(err)
                    reject(err);
                }
                resolve(data.Location)
            })
        });
    },
}