import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    editLink: false,
    sourceLink: false,
    logo: '/x2ink.png',
    showLineNum: true,
    footer: false,
    socialLinks: {
      github: 'https://github.com/x2ink',
    },
    nav: [
      {
        title: '简历',
        link: '/vitae'
      }
      , {
        title: '作品',
        link: '/opus'
      },
      {
        title: '博客',
        link: '/interview'
      },
      {
        title: '收藏',
        link: '/goal'
      }
    ]
  },
})
  ;
