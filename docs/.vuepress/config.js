module.exports = {
  base: '/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'rdsutbbp',
      description: '基于区块链 BaaS 平台下的资源委托系统'
    },
    // 去掉多语言支持
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'rdsutbbp',
    //   description: 'Resource Delegation System Under the Blockchain BaaS Platform.'
    // }
  },
  themeConfig: {
    logo: 'https://resource.gocloudcoder.com/rdsutbbp.png',
    locales: {
      '/': {
       // 多语言下拉菜单的标题
       selectText: '选择语言',
       // 该语言在下拉菜单中的标签
       label: '简体中文',
       // 编辑链接文字
       editLinkText: '在 GitHub 上编辑此页',
       // Service Worker 的配置
       serviceWorker: {
         updatePopup: {
           message: "发现新内容可用.",
           buttonText: "刷新"
         }
       },
       // 当前 locale 的 algolia docsearch 选项
       algolia: {},
       nav: [
         { text: 'core', link: '/core/', ariaLabel: '指南' },
         { text: 'delegation-system', link: '/delegation-system/', ariaLabel: '指南' },
         { text: 'stdb', link: '/stdb/', ariaLabel: '指南' },
         { text: 'deploy', link: '/deploy/', ariaLabel: '指南' },
         { text: 'Github', link: 'https://github.com/rdsutbbp' }
       ],
       sidebar: {
         '/introduction/': [
           '',
         ],
         '/core/': [
           '',
         ],
         '/delegation-system/': [
          '',
        ],
         '/stdb/': [
           '',
         ],
         '/deploy/': [
           '',
         ],
       }
      },
    }
  },
  
}