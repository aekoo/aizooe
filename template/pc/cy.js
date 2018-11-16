
/**
 * 文档: http://cli.caiyi.com/cy/index.html
 */

import path from 'path'

export default {
  scene: ["cy-scene-react", {
    antd: true,
    antd_mobile: false,
    cyd: false
  }],
  entry: {
    app: './src/index.js'
  },
  chainWebpack(config, { webpack }) {
    // 设置 alias
    // config.resolve.alias.set('@', 'src');
    
  },
  alias: {
    "@": path.join(process.cwd(), 'src')
  },
  proxy: {
    '/notcontrol': {target: 'http://www.huishuaka.com', changeOrigin: true},
  },
  hash: true,
  dllSwitch: true,//是否开启dll 开了之后 会自动添加plugins 和copy dll 到dist
  dll: {
    caiyi: ['react', 'react-dom', 'react-router-dom', 'react-loadable']
  },
  node_modules: "../../node_modules"
}