module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                // 이미지 파일이 복사될 경로 및 파일명을 설정합니다.
                name: '[name].[ext]',
                // 복사된 이미지 파일이 저장될 폴더를 설정합니다.
                outputPath: 'images/',
              },
            },
          ],
        },
      ],
    },
  };
  