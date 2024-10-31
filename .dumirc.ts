import {defineConfig} from 'dumi';

export default defineConfig({
  themeConfig: {
    editLink: false,
    sourceLink: false,
    logo: '/x2ink.png',
    prefersColor: false,
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
        link: '/blog'
      },
      {
        title: '目标',
        link: '/goal'
      }
    ]
  },
})
;
