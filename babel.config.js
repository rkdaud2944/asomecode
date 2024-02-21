// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ],
//   plugins: [
//     '@babel/plugin-transform-private-methods',
//     '@babel/plugin-proposal-optional-chaining' 
//   ]
// }

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // 브라우저 타겟 설정 (예: 최신 2개 버전의 모든 주요 브라우저)
        targets: "> 0.25%, last 2 versions, not dead",
        // 폴리필 설정 (필요에 따라 core-js 버전 지정)
        useBuiltIns: "usage",
        corejs: 3,
        // 디버깅 목적으로 설정할 경우 true로 설정
        debug: false,
      },
    ],
  ],
  plugins: [
    // 옵셔널 체이닝 지원
    "@babel/plugin-proposal-optional-chaining",
    // 프라이빗 메소드 및 액세스 지원
    "@babel/plugin-transform-private-methods",
    // 필요한 경우 추가 플러그인을 여기에 명시
  ],
};
