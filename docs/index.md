---
title: 杨成林的网站
hero:
  title: Hello, I'm Yang
  description: 保持热爱，奔赴山海 | An Ordinary Programmer
  actions:
    - text: 查看简历
      link: /vitae
    - text: 项目经历
      link: /opus
features: []
---

<style>
/* --- 全局修正 --- */
.dumi-default-content {
  max-width: 100% !important; 
  padding: 0 20px;
  box-sizing: border-box;
}

/* 动画定义 */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* --- 产品展示区容器 --- */
.product-showcase {
  position: relative;
  max-width: 1200px; 
  margin: 4rem auto; 
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.03);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px;
  /* 恢复 hidden，因为我们现在用 Grid 解决了高度塌陷问题 */
  overflow: hidden; 
  box-sizing: border-box;
}

/* 左侧文字 */
.product-content {
  flex: 1;
  z-index: 10;
  padding-right: 40px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  line-height: 1.2;
}

.product-desc {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 500px;
}

/* 按钮样式 */
.product-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 12px 32px;
  background: #1677ff;
  color: white;
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.3);
  font-size: 1rem;
  position: relative;
  z-index: 20;
}

.product-btn:hover {
  background: #0958d9;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.4);
}

/* --- PC端 视觉区 --- */
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

/* 手机通用样式 */
.phone-mockup {
  width: 250px;
  height: 500px;
  background: #000;
  border-radius: 36px;
  border: 8px solid #1a1a1a;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  /* PC端默认绝对定位 */
  position: absolute;
  top: 50%;
  left: 50%;
}

.phone-mockup img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* --- PC端 状态设定 --- */
.phone-primary {
  z-index: 2;
  transform: translate(calc(-50% - 60px), -50%) rotate(-5deg);
}

.phone-secondary {
  z-index: 1;
  transform: translate(calc(-50% + 40px), calc(-50% + 20px)) scale(0.9) rotate(5deg);
  filter: brightness(0.8);
}

/* PC端 Hover 交互 */
.product-visual:hover .phone-primary {
  transform: translate(calc(-50% - 140px), -50%) rotate(0deg);
}
.product-visual:hover .phone-secondary {
  transform: translate(calc(-50% + 140px), -50%) scale(1) rotate(0deg);
  filter: brightness(1);
  z-index: 2;
}

/* --- 技能墙 --- */
.section-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 30px;
  padding: 40px 0;
  justify-content: center;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: 0.8;
  cursor: pointer;
}

.skill-item:hover {
  opacity: 1;
  transform: translateY(-5px);
}

.skill-item img {
  height: 48px;
  width: 48px;
  object-fit: contain;
  filter: grayscale(30%); 
  transition: filter 0.3s ease;
}

.skill-item:hover img {
  filter: grayscale(0%);
}

.section-title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 5rem;
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 4px;
  background: #1677ff;
  margin: 10px auto 0;
  border-radius: 2px;
}

/* --- 弹窗 Modal 样式 --- */
.qr-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
}

.qr-modal-content {
    background: white;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    position: relative;
    transform: scale(0.9);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    max-width: 90%;
}

.qr-modal.show {
    opacity: 1;
}

.qr-modal.show .qr-modal-content {
    transform: scale(1);
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #f5f5f5;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}

.close-btn:hover {
    background: #e0e0e0;
}

/* --- 移动端适配 (核心修复) --- */
@media (max-width: 900px) {
  .product-showcase {
    flex-direction: column;
    padding: 40px 24px;
    /* 去掉高度限制，让内容撑开 */
    height: auto; 
    text-align: center;
    /* 允许父容器随内部Grid布局自动延伸，解决包裹问题 */
    display: flex;
    overflow: hidden; 
  }
  
  .product-content {
    padding-right: 0;
    margin-bottom: 20px;
    align-items: center;
    z-index: 10;
  }
  
  /* * 使用 Grid 布局技术：
   * 将两张手机放在同一个 Grid 格子里。
   * 这样容器会自动拥有高度（等于手机的高度），
   * 且两张图会完美重叠。
   */
  .product-visual {
    width: 100%;
    height: auto; /* 高度自动 */
    display: grid;
    /* 定义一个区域，两张图都放这里 */
    grid-template-areas: "stack"; 
    place-items: center; /* 居中 */
    margin-top: 20px;
    /* 修正 scale 导致的留白：给负 margin 拉近距离 */
    margin-bottom: -60px; 
    perspective: none;
  }

  .phone-mockup {
    /* 关键：取消绝对定位，改回文档流(Grid Item) */
    position: relative; 
    grid-area: stack; /* 叠在一起 */
    top: auto;
    left: auto;
    
    /* 统一缩小 */
    transform-origin: center center;
    /* 此时容器会被撑开到 500px 高 */
  }

  /* 手机1 (前) */
  .phone-primary {
    /* 向左偏 */
    transform: translateX(-20px) scale(0.65) rotate(-5deg);
    z-index: 2;
  }

  /* 手机2 (后) */
  .phone-secondary {
    /* 向右偏 */
    transform: translateX(20px) scale(0.65) rotate(5deg);
    z-index: 1;
  }
  
  /* 移动端禁用 Hover 位移 */
  .product-visual:hover .phone-primary {
      transform: translateX(-20px) scale(0.65) rotate(-5deg);
  }
  .product-visual:hover .phone-secondary {
      transform: translateX(20px) scale(0.65) rotate(5deg);
  }
}
</style>

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
    <button class="product-btn" id="btn-show-qr">
      立即体验
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:8px"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </button>
  </div>
  
  <div class="product-visual">
    <div class="phone-mockup phone-secondary">
       <img src="/other/jp_phone2.jpg" alt="App Screenshot 2">
    </div>
    <div class="phone-mockup phone-primary">
       <img src="/other/jp_phone1.jpg" alt="App Screenshot 1">
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
    </div>
</div>

<div id="miniprogram-modal" class="qr-modal">
    <div class="qr-modal-content" id="modal-content">
        <button class="close-btn" id="btn-close-modal">×</button>
        <h3 style="margin-bottom: 20px; font-size: 1.2rem; color: #333;">微信扫码 立即体验</h3>
        <div style="width: 250px; height: 250px; background: #f0f0f0; border-radius: 10px; overflow: hidden; margin: 0 auto;">
            <img src="/other/easyjapanese_miniprogram.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="小程序码">
        </div>
        <p style="margin-top: 15px; color: #888; font-size: 0.9rem;">轻松日语 - 您的随身词典</p>
    </div>
</div>

<script>
  // 使用事件委托，确保点击事件100%生效
  if (typeof document !== 'undefined') {
      document.body.addEventListener('click', function(e) {
          if (e.target && e.target.closest('#btn-show-qr')) {
              var modal = document.getElementById('miniprogram-modal');
              if(modal) {
                  modal.style.display = 'flex';
                  setTimeout(function() {
                      modal.classList.add('show');
                  }, 10);
              }
          }
          if (e.target && e.target.closest('#btn-close-modal')) {
              e.stopPropagation();
              closeMyModal();
          }
          if (e.target && e.target.id === 'miniprogram-modal') {
              closeMyModal();
          }
      });
  }

  function closeMyModal() {
      var modal = document.getElementById('miniprogram-modal');
      if(modal) {
          modal.classList.remove('show');
          setTimeout(function() {
              modal.style.display = 'none';
          }, 300);
      }
  }
</script>
