import {defineConfig} from 'dumi';

export default defineConfig({
  themeConfig: {
    editLink: false,
    sourceLink: false,
    logo: '/x2ink.png',
    prefersColor: false,
    showLineNum: true,
    footer: false,
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
        title: '面试',
        link: '/interview'
      },
      {
        title: '目标',
        link: '/goal'
      }
    ]
  },
})
;
