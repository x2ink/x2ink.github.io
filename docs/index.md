---
title: 杨成林的网站
features: []
---

<style>
/* =========================================
   1. 全局与基础设置
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

/* 动画定义 */
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
   2. 自定义 Hero 区域
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

.hero-motto-card {
  position: relative;
  margin-bottom: 40px;
  padding:40px;
  background: #f9f9f9; 
  border-radius: 20px;
  border: 1px solid #eee;
  box-shadow: 0 10px 30px rgba(0,0,0,0.02);
  max-width: 760px;
  animation: fade-up 0.8s ease-out 0.2s backwards;
}

.hero-motto-card::before {
  content: '“';
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 80px;
  line-height: 1;
  color: #1677ff;
  opacity: 0.15;
  font-family: serif;
}

.hero-motto-text {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  font-weight: 400;
  text-align: justify; 
  text-align-last: center; 
  margin: 0;
}

/* =========================================
   3. 核心按钮样式 (强制重置 防止污染)
   ========================================= */
.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center; 
  animation: fade-up 0.8s ease-out 0.3s backwards;
}

/* 通用按钮基础样式 */
.hero-btn, .product-btn {
  box-sizing: border-box; /* 关键：边框算在尺寸内 */
  display: inline-flex !important; /* 强制 flex 布局 */
  align-items: center;
  justify-content: center;
  height: 52px; 
  padding: 0 36px;
  border-radius: 50px; 
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  
  /* 强制重置 A 标签的默认样式，防止污染 */
  text-decoration: none !important;
  background-image: none !important; 
  border-bottom: none !important;
  
  /* 只有 Transform 参与过渡，性能最好 */
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
  
  /* 默认阴影 */
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.2);
}

/* --- 主按钮 (项目经历 & 立即体验) --- */
/* 正常状态 */
.hero-btn-primary, .product-btn {
  background-color: #1677ff !important;
  border: 2px solid #1677ff !important; /* 实心同色边框 */
  color: #fff !important;               /* 强制白字 */
}

/* Hover 状态：只放大，颜色完全锁死 */
.hero-btn-primary:hover, .product-btn:hover {
  transform: scale(1.05);
  background-color: #1677ff !important; /* 颜色不变 */
  border-color: #1677ff !important;     /* 边框不变 */
  color: #fff !important;               /* 字体不变 */
  box-shadow: 0 12px 25px rgba(22, 119, 255, 0.3);
}

/* --- 次级按钮 (查看简历) --- */
/* 正常状态 */
.hero-btn-secondary {
  background-color: #fff !important;
  border: 2px solid #1677ff !important; /* 实心蓝色边框 */
  color: #1677ff !important;            /* 强制蓝字 */
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

/* Hover 状态：只放大，颜色完全锁死 */
.hero-btn-secondary:hover {
  transform: scale(1.05);
  background-color: #fff !important;    /* 保持白底 */
  border-color: #1677ff !important;     /* 保持蓝边 */
  color: #1677ff !important;            /* 保持蓝字 */
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.15);
}

/* 修正产品按钮由于 svg 带来的对齐问题 */
.product-btn svg {
  margin-left: 8px;
}

/* =========================================
   4. 产品展示区
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
  z-index: 10;
  padding-right: 40px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* 修正按钮对齐 */
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

/* PC端 状态 */
.phone-primary { z-index: 2; transform: translate(calc(-50% - 60px), -50%) rotate(-5deg); }
.phone-secondary { z-index: 1; transform: translate(calc(-50% + 40px), calc(-50% + 20px)) scale(0.9) rotate(5deg); filter: brightness(0.8); }

.product-visual:hover .phone-primary { transform: translate(calc(-50% - 140px), -50%) rotate(0deg); }
.product-visual:hover .phone-secondary { transform: translate(calc(-50% + 140px), -50%) scale(1) rotate(0deg); filter: brightness(1); z-index: 2; }

/* =========================================
   5. 技术栈
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
   6. 移动端适配
   ========================================= */
@media (max-width: 768px) {
  .hero-wrapper { min-height: auto; padding: 100px 0 60px; margin-bottom: 2rem; }
  .hero-title { font-size: 2.8rem; margin-bottom: 30px; }
  .hero-motto-card { padding: 20px; margin-bottom: 30px; }
  .hero-motto-text { font-size: 1rem; text-align: left; text-align-last: left;}
  
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
</style>

<div class="hero-wrapper">
  <div class="hero-content">
    <span class="hero-tag">👋 Hello, I'm Yang</span>
    <h1 class="hero-title">
      保持热爱<br>
      <span class="hero-highlight">奔赴山海</span>
    </h1>
    <div class="hero-motto-card">
      <p class="hero-motto-text">
        不管将来从事什么职业，有什么样的志向，一定要加强基础知识的学习。打牢基本功和培育创新能力是并行不悖的。把基础打牢了，才能触类旁通，行行都可以写出精彩。
      </p>
    </div>
    <div class="hero-actions">
       <a href="/opus" class="hero-btn hero-btn-primary">项目经历</a>
      <a href="/vitae" class="hero-btn hero-btn-secondary">查看简历</a>
    </div>
  </div>
</div>

<div class="container-limit">
    <div class="product-showcase">
      <div class="product-content">
        <div class="product-logo">
          <img src="/other/easyjapanese.png" style="width: 100%; height: 100%; object-fit: contain;" alt="logo" />
        </div>
        <div class="product-title">轻松日语</div>
        <div class="product-desc">
          专注于日语单词学习与记忆的微信小程序。<br>
          抛弃繁杂的功能，回归语言学习的本质，力求打造最自由、最轻量的日语词典体验。
        </div>
        <a href="/opus/easyjapanese" class="product-btn">
          立即体验
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:8px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div class="product-visual">
        <div class="phone-mockup phone-secondary">
           <img src="/easyjapanese/2.jpg" alt="App Screenshot 2">
        </div>
        <div class="phone-mockup phone-primary">
           <img src="/easyjapanese/1.jpg" alt="App Screenshot 1">
        </div>
      </div>
    </div>
    <div class="section-wrapper">
        <h2 class="section-title">技术栈</h2>
        <div style="text-align: center; color: #888; margin-bottom: 2rem;">我的武器库与常用工具</div>
        <div class="skills-container">
            <div class="skill-item" title="HTML5"><img src="https://api.iconify.design/logos:html-5.svg"></div>
            <div class="skill-item" title="CSS3"><img src="https://api.iconify.design/logos:css-3.svg"></div>
            <div class="skill-item" title="JavaScript"><img src="https://api.iconify.design/logos:javascript.svg"></div>
            <div class="skill-item" title="TypeScript"><img src="https://api.iconify.design/logos:typescript-icon.svg"></div>
            <div class="skill-item" title="Vue"><img src="https://api.iconify.design/logos:vue.svg"></div>
            <div class="skill-item" title="React"><img src="https://api.iconify.design/logos:react.svg"></div>
            <div class="skill-item" title="Ant Design"><img src="https://api.iconify.design/logos:ant-design.svg"></div>
            <div class="skill-item" title="Bootstrap"><img src="https://api.iconify.design/logos:bootstrap.svg"></div>
            <div class="skill-item" title="Less"><img src="https://api.iconify.design/logos:less.svg"></div>
            <div class="skill-item" title="jQuery"><img src="https://api.iconify.design/logos:jquery.svg"></div>
            <div class="skill-item" title="Vite"><img src="https://api.iconify.design/logos:vitejs.svg"></div>
            <div class="skill-item" title="Node.js"><img src="https://api.iconify.design/logos:nodejs-icon.svg"></div>
            <div class="skill-item" title="NPM"><img src="https://api.iconify.design/logos:npm-icon.svg"></div>
            <div class="skill-item" title="Java"><img src="https://api.iconify.design/logos:java.svg"></div>
            <div class="skill-item" title="Spring"><img src="https://api.iconify.design/logos:spring-icon.svg"></div>
            <div class="skill-item" title="Kotlin"><img src="https://api.iconify.design/logos:kotlin.svg"></div>
            <div class="skill-item" title="Go"><img src="https://api.iconify.design/logos:go.svg"></div>
            <div class="skill-item" title="Gin"><img src="https://api.iconify.design/logos:gin.svg"></div>
            <div class="skill-item" title="Python"><img src="https://api.iconify.design/logos:python.svg"></div>
            <div class="skill-item" title="Django"><img src="https://api.iconify.design/logos:django-icon.svg"></div>
            <div class="skill-item" title="Flask"><img src="https://api.iconify.design/logos:flask.svg"></div>
            <div class="skill-item" title="PHP"><img src="https://api.iconify.design/logos:php.svg"></div>
            <div class="skill-item" title="MySQL"><img src="https://api.iconify.design/logos:mysql.svg"></div>
            <div class="skill-item" title="MongoDB"><img src="https://api.iconify.design/logos:mongodb-icon.svg"></div>
            <div class="skill-item" title="Redis"><img src="https://api.iconify.design/logos:redis.svg"></div>
            <div class="skill-item" title="Git"><img src="https://api.iconify.design/logos:git-icon.svg"></div>
            <div class="skill-item" title="Linux"><img src="https://api.iconify.design/logos:linux-tux.svg"></div>
            <div class="skill-item" title="CentOS"><img src="https://api.iconify.design/logos:centos-icon.svg"></div>
            <div class="skill-item" title="Android"><img src="https://api.iconify.design/logos:android-icon.svg"></div>
            <div class="skill-item" title="VS Code"><img src="https://api.iconify.design/logos:visual-studio-code.svg"></div>
            <div class="skill-item" title="Markdown"><img src="https://api.iconify.design/logos:markdown.svg"></div>
             <div class="skill-item" title="Markdown"><img src="https://api.iconify.design/logos:gradle.svg"></div>
              <div class="skill-item" title="Markdown"><img src="https://api.iconify.design/logos:conda.svg"></div>
        </div>
    </div>
</div>
