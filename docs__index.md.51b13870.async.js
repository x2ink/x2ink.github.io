"use strict";(self.webpackChunkmysite=self.webpackChunkmysite||[]).push([[935],{97542:function(d,t,i){i.r(t);var p=i(72269),m=i(93359),g=i(61788),x=i(19977),h=i(25809),u=i(90978),v=i(96057),f=i(18483),s=i(53683),a=i(80936),o=i(67294),n=i(85893);function l(){var c=(0,s.eL)(),e=c.texts;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:`
/* =========================================
   1. \u5168\u5C40\u4E0E\u57FA\u7840\u8BBE\u7F6E
   ========================================= */
.dumi-default-content {
  max-width: 100% !important; 
  padding: 0 !important;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.container-limit {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* \u52A8\u753B\u5B9A\u4E49 */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes gradient-text {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* =========================================
   2. \u81EA\u5B9A\u4E49 Hero \u533A\u57DF
   ========================================= */
.hero-wrapper {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 4rem;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px; 
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  background: rgba(22, 119, 255, 0.08);
  color: #1677ff;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 30px;
  border: 1px solid rgba(22, 119, 255, 0.1);
  animation: fade-up 0.8s ease-out;
}

.hero-title {
  font-size: 4.5rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 40px;
  letter-spacing: -2px;
  color: #1a1a1a;
  animation: fade-up 0.8s ease-out 0.1s backwards;
}

.hero-highlight {
  background: linear-gradient(90deg, #1677ff, #ff0080, #7928ca);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-text 4s linear infinite;
}
/* =========================================
   3. \u6838\u5FC3\u6309\u94AE\u6837\u5F0F (\u5F3A\u5236\u91CD\u7F6E \u9632\u6B62\u6C61\u67D3)
   ========================================= */
.hero-actions {
  margin-top:80px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center; 
  animation: fade-up 0.8s ease-out 0.3s backwards;
}

/* \u901A\u7528\u6309\u94AE\u57FA\u7840\u6837\u5F0F */
.hero-btn, .product-btn {
  box-sizing: border-box; /* \u5173\u952E\uFF1A\u8FB9\u6846\u7B97\u5728\u5C3A\u5BF8\u5185 */
  display: inline-flex !important; /* \u5F3A\u5236 flex \u5E03\u5C40 */
  align-items: center;
  justify-content: center;
  height: 52px; 
  padding: 0 36px;
  border-radius: 50px; 
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  
  /* \u5F3A\u5236\u91CD\u7F6E A \u6807\u7B7E\u7684\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u9632\u6B62\u6C61\u67D3 */
  text-decoration: none !important;
  background-image: none !important; 
  border-bottom: none !important;
  
  /* \u53EA\u6709 Transform \u53C2\u4E0E\u8FC7\u6E21\uFF0C\u6027\u80FD\u6700\u597D */
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
  
  /* \u9ED8\u8BA4\u9634\u5F71 */
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.2);
}

/* --- \u4E3B\u6309\u94AE (\u9879\u76EE\u7ECF\u5386 & \u7ACB\u5373\u4F53\u9A8C) --- */
/* \u6B63\u5E38\u72B6\u6001 */
.hero-btn-primary, .product-btn {
  background-color: #1677ff !important;
  border: 2px solid #1677ff !important; /* \u5B9E\u5FC3\u540C\u8272\u8FB9\u6846 */
  color: #fff !important;               /* \u5F3A\u5236\u767D\u5B57 */
}

/* Hover \u72B6\u6001\uFF1A\u53EA\u653E\u5927\uFF0C\u989C\u8272\u5B8C\u5168\u9501\u6B7B */
.hero-btn-primary:hover, .product-btn:hover {
  transform: scale(1.05);
  background-color: #1677ff !important; /* \u989C\u8272\u4E0D\u53D8 */
  border-color: #1677ff !important;     /* \u8FB9\u6846\u4E0D\u53D8 */
  color: #fff !important;               /* \u5B57\u4F53\u4E0D\u53D8 */
  box-shadow: 0 12px 25px rgba(22, 119, 255, 0.3);
}

/* --- \u6B21\u7EA7\u6309\u94AE (\u67E5\u770B\u7B80\u5386) --- */
/* \u6B63\u5E38\u72B6\u6001 */
.hero-btn-secondary {
  background-color: #fff !important;
  border: 2px solid #1677ff !important; /* \u5B9E\u5FC3\u84DD\u8272\u8FB9\u6846 */
  color: #1677ff !important;            /* \u5F3A\u5236\u84DD\u5B57 */
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

/* Hover \u72B6\u6001\uFF1A\u53EA\u653E\u5927\uFF0C\u989C\u8272\u5B8C\u5168\u9501\u6B7B */
.hero-btn-secondary:hover {
  transform: scale(1.05);
  background-color: #fff !important;    /* \u4FDD\u6301\u767D\u5E95 */
  border-color: #1677ff !important;     /* \u4FDD\u6301\u84DD\u8FB9 */
  color: #1677ff !important;            /* \u4FDD\u6301\u84DD\u5B57 */
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.15);
}

/* \u4FEE\u6B63\u4EA7\u54C1\u6309\u94AE\u7531\u4E8E svg \u5E26\u6765\u7684\u5BF9\u9F50\u95EE\u9898 */
.product-btn svg {
  margin-left: 8px;
}

/* =========================================
   4. \u4EA7\u54C1\u5C55\u793A\u533A
   ========================================= */
.product-showcase {
  position: relative;
  background: linear-gradient(135deg, #f9f9f9 0%, #edf1f4 100%);
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
  overflow: hidden;
  margin-bottom: 4rem;
  box-shadow: 0 20px 40px rgba(0,0,0,0.03);
}

.product-content {
  flex: 1;
  z-index: 1;
  padding-right: 40px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* \u4FEE\u6B63\u6309\u94AE\u5BF9\u9F50 */
}

.product-logo {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin-bottom: 24px;
  background: white;
  padding: 10px;
  box-sizing: border-box;
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.product-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.product-desc {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 500px;
}

.product-visual {
  flex: 1;
  height: 550px;
  position: relative;
  perspective: 1000px; 
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.phone-mockup {
  width: 250px;
  height: 500px;
  background: #000;
  border-radius: 36px;
  border: 8px solid #1a1a1a;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: absolute;
  top: 50%;
  left: 50%;
}
.phone-mockup img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* PC\u7AEF \u72B6\u6001 */
.phone-primary { z-index: 2; transform: translate(calc(-50% - 60px), -50%) rotate(-5deg); }
.phone-secondary { z-index: 1; transform: translate(calc(-50% + 40px), calc(-50% + 20px)) scale(0.9) rotate(5deg); filter: brightness(0.8); }

.product-visual:hover .phone-primary { transform: translate(calc(-50% - 140px), -50%) rotate(0deg); }
.product-visual:hover .phone-secondary { transform: translate(calc(-50% + 140px), -50%) scale(1) rotate(0deg); filter: brightness(1); z-index: 2; }

/* =========================================
   5. \u6280\u672F\u6808
   ========================================= */
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 30px;
  padding: 40px 0;
  justify-content: center;
}

.skill-item {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: all 0.3s ease; opacity: 0.8; cursor: pointer;
}
.skill-item:hover { opacity: 1; transform: translateY(-5px); }
.skill-item img { height: 48px; width: 48px; object-fit: contain; filter: grayscale(30%); transition: filter 0.3s ease; }
.skill-item:hover img { filter: grayscale(0%); }

.section-title {
  text-align: center; font-size: 1.8rem; font-weight: 600; margin-top: 5rem; margin-bottom: 1rem; position: relative;
}
.section-title::after {
  content: ''; display: block; width: 40px; height: 4px; background: #1677ff; margin: 10px auto 0; border-radius: 2px;
}

/* =========================================
   6. \u79FB\u52A8\u7AEF\u9002\u914D
   ========================================= */
@media (max-width: 768px) {
  .hero-wrapper { min-height: auto; padding: 100px 0 60px; margin-bottom: 2rem; }
  .hero-title { font-size: 2.8rem; margin-bottom: 30px; }
  .product-showcase {
    flex-direction: column; padding: 40px 24px; height: auto; 
    text-align: center; display: flex; overflow: hidden;
  }
  .product-content { padding-right: 0; margin-bottom: 20px; align-items: center; }
  
  .product-visual {
    width: 100%; height: auto; display: grid; grid-template-areas: "stack"; 
    place-items: center; margin-top: 20px; margin-bottom: -60px; perspective: none;
  }
  .phone-mockup {
    position: relative; grid-area: stack; top: auto; left: auto; transform-origin: center center;
  }
  .phone-primary { transform: translateX(-20px) scale(0.65) rotate(-5deg); z-index: 2; }
  .phone-secondary { transform: translateX(20px) scale(0.65) rotate(5deg); z-index: 1; }
  
  .product-visual:hover .phone-primary { transform: translateX(-20px) scale(0.65) rotate(-5deg); }
  .product-visual:hover .phone-secondary { transform: translateX(20px) scale(0.65) rotate(5deg); }
}
`}}),(0,n.jsxs)("div",{className:"hero-wrapper",children:[e[0].value,(0,n.jsxs)("div",{className:"hero-content",children:[e[1].value,(0,n.jsx)("span",{className:"hero-tag",children:e[2].value}),e[3].value,(0,n.jsxs)("h1",{className:"hero-title",id:"i-think-it-is-possible-for-ordinary-people-to-choose-to-be-extraordinary",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#i-think-it-is-possible-for-ordinary-people-to-choose-to-be-extraordinary",children:(0,n.jsx)("span",{className:"icon icon-link"})}),`
      `,(0,n.jsx)("span",{className:"hero-highlight",children:e[4].value}),`
    `]}),e[5].value,(0,n.jsxs)("div",{className:"hero-actions",children:[e[6].value,(0,n.jsx)(s.rU,{className:"hero-btn hero-btn-primary",to:"/opus",children:e[7].value}),e[8].value,(0,n.jsx)(s.rU,{className:"hero-btn hero-btn-secondary",to:"/vitae",children:e[9].value}),e[10].value]}),e[11].value]})]}),(0,n.jsxs)("div",{className:"container-limit",children:[e[12].value,(0,n.jsxs)("div",{className:"product-showcase",children:[e[13].value,(0,n.jsxs)("div",{className:"product-content",children:[e[14].value,(0,n.jsxs)("div",{className:"product-logo",children:[e[15].value,(0,n.jsx)("img",{src:"/other/easyjapanese.png",style:{width:"100%",height:"100%",objectFit:"contain"},alt:"logo"}),e[16].value]}),e[17].value,(0,n.jsx)("div",{className:"product-title",children:e[18].value}),e[19].value,(0,n.jsxs)("div",{className:"product-desc",children:[e[20].value,(0,n.jsx)("br",{}),e[21].value]}),e[22].value,(0,n.jsxs)(s.rU,{className:"product-btn",to:"/opus/easyjapanese",children:[e[23].value,(0,n.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:"8px"},children:(0,n.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})}),e[24].value]}),e[25].value]}),e[26].value,(0,n.jsxs)("div",{className:"product-visual",children:[e[27].value,(0,n.jsxs)("div",{className:"phone-mockup phone-secondary",children:[e[28].value,(0,n.jsx)("img",{src:"/easyjapanese/2.jpg",alt:"App Screenshot 2"}),e[29].value]}),e[30].value,(0,n.jsxs)("div",{className:"phone-mockup phone-primary",children:[e[31].value,(0,n.jsx)("img",{src:"/easyjapanese/1.jpg",alt:"App Screenshot 1"}),e[32].value]}),e[33].value]}),e[34].value]}),e[35].value,(0,n.jsxs)("div",{className:"section-wrapper",children:[e[36].value,(0,n.jsxs)("h2",{className:"section-title",id:"\u6280\u672F\u6808",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6280\u672F\u6808",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6280\u672F\u6808"]}),e[37].value,(0,n.jsx)("div",{style:{textAlign:"center",color:"#888",marginBottom:"2rem"},children:e[38].value}),e[39].value,(0,n.jsxs)("div",{className:"skills-container",children:[e[40].value,(0,n.jsx)("div",{className:"skill-item",title:"HTML5",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:html-5.svg"})}),e[41].value,(0,n.jsx)("div",{className:"skill-item",title:"CSS3",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:css-3.svg"})}),e[42].value,(0,n.jsx)("div",{className:"skill-item",title:"JavaScript",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:javascript.svg"})}),e[43].value,(0,n.jsx)("div",{className:"skill-item",title:"TypeScript",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:typescript-icon.svg"})}),e[44].value,(0,n.jsx)("div",{className:"skill-item",title:"Vue",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:vue.svg"})}),e[45].value,(0,n.jsx)("div",{className:"skill-item",title:"React",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:react.svg"})}),e[46].value,(0,n.jsx)("div",{className:"skill-item",title:"Ant Design",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:ant-design.svg"})}),e[47].value,(0,n.jsx)("div",{className:"skill-item",title:"Bootstrap",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:bootstrap.svg"})}),e[48].value,(0,n.jsx)("div",{className:"skill-item",title:"Less",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:less.svg"})}),e[49].value,(0,n.jsx)("div",{className:"skill-item",title:"jQuery",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:jquery.svg"})}),e[50].value,(0,n.jsx)("div",{className:"skill-item",title:"Vite",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:vitejs.svg"})}),e[51].value,(0,n.jsx)("div",{className:"skill-item",title:"Node.js",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:nodejs-icon.svg"})}),e[52].value,(0,n.jsx)("div",{className:"skill-item",title:"NPM",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:npm-icon.svg"})}),e[53].value,(0,n.jsx)("div",{className:"skill-item",title:"Java",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:java.svg"})}),e[54].value,(0,n.jsx)("div",{className:"skill-item",title:"Spring",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:spring-icon.svg"})}),e[55].value,(0,n.jsx)("div",{className:"skill-item",title:"Kotlin",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:kotlin.svg"})}),e[56].value,(0,n.jsx)("div",{className:"skill-item",title:"Go",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:go.svg"})}),e[57].value,(0,n.jsx)("div",{className:"skill-item",title:"Gin",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:gin.svg"})}),e[58].value,(0,n.jsx)("div",{className:"skill-item",title:"Python",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:python.svg"})}),e[59].value,(0,n.jsx)("div",{className:"skill-item",title:"Django",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:django-icon.svg"})}),e[60].value,(0,n.jsx)("div",{className:"skill-item",title:"Flask",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:flask.svg"})}),e[61].value,(0,n.jsx)("div",{className:"skill-item",title:"PHP",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:php.svg"})}),e[62].value,(0,n.jsx)("div",{className:"skill-item",title:"MySQL",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:mysql.svg"})}),e[63].value,(0,n.jsx)("div",{className:"skill-item",title:"MongoDB",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:mongodb-icon.svg"})}),e[64].value,(0,n.jsx)("div",{className:"skill-item",title:"Redis",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:redis.svg"})}),e[65].value,(0,n.jsx)("div",{className:"skill-item",title:"Git",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:git-icon.svg"})}),e[66].value,(0,n.jsx)("div",{className:"skill-item",title:"Linux",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:linux-tux.svg"})}),e[67].value,(0,n.jsx)("div",{className:"skill-item",title:"CentOS",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:centos-icon.svg"})}),e[68].value,(0,n.jsx)("div",{className:"skill-item",title:"Android",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:android-icon.svg"})}),e[69].value,(0,n.jsx)("div",{className:"skill-item",title:"VS Code",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:visual-studio-code.svg"})}),e[70].value,(0,n.jsx)("div",{className:"skill-item",title:"Markdown",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:markdown.svg"})}),e[71].value,(0,n.jsx)("div",{className:"skill-item",title:"Markdown",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:gradle.svg"})}),e[72].value,(0,n.jsx)("div",{className:"skill-item",title:"Markdown",children:(0,n.jsx)("img",{src:"https://api.iconify.design/logos:conda.svg"})}),e[73].value]}),e[74].value]})]})]})})}function r(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(a.Z,{}),children:(0,n.jsx)(l,{})})})}t.default=r}}]);
