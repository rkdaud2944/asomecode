# asomecode-front

## 빌드 및 실행

### Project setup
```
npm install --global node-gyp
npm install
```

### dev 환경 실행

```
npm run e:dev
```

### prod 환경 빌드

```
npm run e:prod
```

## 외부 모듈에서 otp 모듈 사용하기

### 외부(메타버스 등)에서 otp 코드 인증하기

``` js
const msg = {
    type: "verifyOtp",
    params: serialNumber,
};
window.opener.postMessage(JSON.stringify(msg));
```
* 보드의 시리얼넘버를 파라메터로 메시지를 전달하면 어썸코드에서 보드에게 코드를 가져온다.
* 이때 보드는 연결상태여야 한다.


### 결과 처리

#### /src/globals/otp.js

``` js
result(data) {
    const code = data.split(":")[1].trim();

    // TODO: 백엔드에 전달하고 인증 결과 가져와서 처리하기
    console.log("OTP 인증에 성공했습니다.", this.serialNumber, code);
},
```
* otp.js 코드에서 TODO 코멘트 부분 처리 필요
* code는 보드에서 가져온 opt code
* 백엔드에 코드를 인증받고 처리 결과를 메타버스로 알려줘야 한다.

### /src/globals/windows.js

* windows.js는 데이터, 어썸블록, 메타버스 등 팝업 형태로 오픈되는 윈도우를 관리한다.
* windows["metaverse"]에 메타버스가 오픈된 윈도우 핸들이 저장된다.
  * windows["metaverse"].postMessage() 형식으로 결과를 돌려주면 된다. (에러 포함)
