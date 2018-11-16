
/**
 * 文档: http://cli.caiyi.com/cy/index.html
 */

export default {
  scene: ["cy-scene-react", {
    antd: true,
    antd_mobile: false,
    cyd: false
  }],
  entry: {
    app: './src/index.js'
  },
  html: [//array or json
    {
      filename: './index.html',
      template : 'src/index.html',
      inject   : true,
      chunks: ['app']
    }
  ],
  outputPath: 'dist',//打包之后的目录
  chainWebpack(config, { webpack }) {
    // 设置 alias
    // config.resolve.alias.set('b', 'path/to/b');
    
  },
  disableCSSModules: false,//默认false
  proxy: {
    '/notcontrol': {target: 'http://www.huishuaka.com', changeOrigin: true},
  },
  babel: {
    
  },
  hash: true,
  dllSwitch: true,//是否开启dll 开了之后 会自动添加plugins 和copy dll 到dist
  dll: {
    caiyi: ['react', 'react-dom', 'react-router-dom', 'react-loadable']
  },
  copy: ""// string or Array
}