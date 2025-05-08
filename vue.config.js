// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    },
    electronBuilder: {
      nodeIntegration: true,
      externals: [
        'serialport',
        'electron-log',
        'electron-updater'
      ],
      preload: 'src/preload.js',
      // vue.config.js 의 electronBuilder.builderOptions 안에…
      builderOptions: {
        extraResources: [
          {
            from: 'src/assets',          // 복사할 원본
            to:   'assets',              // process.resourcesPath\assets\…
            filter: ['**/*.{png,jpg}']   // 원하면 필터 추가
          }
        ],
        appId: 'com.asomecode.app',
        publish: [
          // (1) 채널 메타데이터만 version-files/ 에
          {
            provider: 's3',
            bucket: 'asomecode-dev-resource',
            region: 'ap-northeast-2',
            path: 'version-files',
            // NOTE: 이 항목은 metadata(latest.yml)만 업로드
            publishAutoUpdate: true,  
            // 기본값 true 이므로 생략해도 무방합니다
          },
          // (2) 각 버전별 바이너리(exe, blockMap)만 version-files/${version}/ 에
          // {
          //   provider: 's3',
          //   bucket: 'asomecode-dev-resource',
          //   region: 'ap-northeast-2',
          //   path: 'version-files/${version}',
          //   // 이 설정에서는 metadata를 다시 올리지 않도록
          //   publishAutoUpdate: false
          // }
        ],
        win: {
          icon: 'src/assets/images/logo/asome-favicon-1024.ico'
        },
        mac: {
          target: ['dmg'],
          icon: 'src/assets/images/logo/asome-favicon-1024.ico'
        },
        linux: {
          target: ['AppImage'],
          icon: 'src/assets/images/logo/asome-favicon-1024.ico'
        }
      }

    }
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/css/_variabled.scss";
        `,
      },
    },
  },

  devServer: {
    client: { overlay: false }
  },

  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        zlib: require.resolve('browserify-zlib'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        util: require.resolve('util/'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        fs: false,
        child_process: false,
        net: false,
        tls: false,
        serialport: false,
      }
    }
  }
})
