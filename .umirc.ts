import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页',
        },
        {
          path: '/user',
          component: './user/index',
          title: '我的',
        },
        {
          path: '/user/edit',
          component: './user/edit',
          title: '设置',
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单',
        },
        {
          path: '/search',
          component: './search/index',
          title: '搜索',
        },
        {
          path: '/observer',
          component: './observer',
          title: 'observer',
        },
        {
          path: '/house',
          component: './house',
          title: '房屋详情',
        },
      ],
    },
  ],
  fastRefresh: {},
  // extraPostCSSPlugins: [
  //   require('postcss-px-to-viewport')({
  //     viewportWidth: 360, // 视窗的宽度，对应的是我们设计稿的宽度，一般是375
  //     unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
  //     viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
  //     selectorBlackList: [], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
  //     minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
  //     mediaQuery: false, // 允许在媒体查询中转换`px`
  //     exclude: [/node_modules/, /Authentication-pc/, /RetrievePassword-pc/], // 设置忽略转换的文件夹目录
  //   }),
  // ]
});
