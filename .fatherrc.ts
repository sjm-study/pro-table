import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'dist/lib'
  },
  prebundle: {
    deps: {}
  },
  esm: {
    output: 'dist/es'
  },
  umd: {
    output: 'dist/dist',
    // globals: {
    //   react: 'React',
    //   'react-dom': 'ReactDOM',
    // },
  },
  // 额外的 babel 插件配置
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  // less 文件转换配置
  // lessInBabelMode: true,
  
});
