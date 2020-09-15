const px2vw = require('postcss-px-to-viewport')
module.exports = {
  devServer: {
    proxy: {
      //请求的url中要包含"/aaa"
      '/vip/index/getVipHomeSchedular': {
        target: 'https://api.juooo.com/',
        changeOrigin: true
      },
      '/city': {
        target: 'https://api.juooo.com/',
        changeOrigin: true,
      },
      '/home' : {
        target : 'https://api.juooo.com/',
        changeOrigin : true,
      },
      '/Show' : {
        target : 'https://api.juooo.com/',
        changeOrigin : true,
      },
      '/Schedule' : {
        target : 'https://api.juooo.com/',
        changeOrigin : true,
      }

    }
  },
    css: {
      loaderOptions: {
        css: {
          // 这里的选项会传递给 css-loader
        },
        postcss: {
          // 这里的选项会传递给 postcss-loader
          plugins : [new px2vw({
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /node_modules/,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568
          })]
            
        }
      }
    }
  }