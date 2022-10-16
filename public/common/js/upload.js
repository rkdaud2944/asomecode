$("#qq-template").html(App.load("./templates/template-upload.html"));

var filename_dst = random_str(32);

var uploader = new qq.s3.FineUploader({
    debug: false,
    multiple: false,
    element: document.getElementById('fine-uploader'),
    request: {
        endpoint: 'https://asomeit-files-seoul.s3.amazonaws.com', 
        accessKey: 'AKIAJWBI5P2KO7BI4CQQ' 
    },
    objectProperties: {
        region: 'ap-northeast-2',
        key(fileId) {
            var filename = this.getName(fileId);
            return 'uploads/' + filename_dst;
        }
    },
    signature: {
        version: 4,
        endpoint: 'https://t12pvzgjl9.execute-api.ap-northeast-2.amazonaws.com/dev'
    },
    retry: {
        enableAuto: true
    },
    callbacks: {
        onComplete: on_complete
    }
});