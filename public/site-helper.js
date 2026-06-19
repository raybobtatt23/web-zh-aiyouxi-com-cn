/**
 * 站点辅助脚本 - 生成提示卡片、关键词和访问说明
 * 用于 https://web-zh-aiyouxi.com.cn
 */

(function() {
  'use strict';

  // 配置信息
  const CONFIG = {
    siteUrl: 'https://web-zh-aiyouxi.com.cn',
    keywords: ['爱游戏', '网页游戏', '在线娱乐', '休闲游戏', 'H5游戏'],
    cardTitle: '欢迎来到爱游戏',
    cardDescription: '发现海量在线娱乐内容，即刻开始你的游戏之旅！'
  };

  /**
   * 创建页面提示卡片
   */
  function createInfoCard() {
    const card = document.createElement('div');
    card.className = 'site-helper-card';
    card.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      padding: 20px;
      max-width: 300px;
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;

    const title = document.createElement('h4');
    title.textContent = CONFIG.cardTitle;
    title.style.cssText = 'margin: 0 0 8px 0; color: #333; font-size: 16px; font-weight: 600;';

    const desc = document.createElement('p');
    desc.textContent = CONFIG.cardDescription;
    desc.style.cssText = 'margin: 0 0 12px 0; color: #666; font-size: 14px; line-height: 1.5;';

    const link = document.createElement('a');
    link.href = CONFIG.siteUrl;
    link.textContent = '立即前往 ›';
    link.target = '_blank';
    link.style.cssText = 'color: #4a90d9; text-decoration: none; font-size: 14px; font-weight: 500;';

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    return card;
  }

  /**
   * 生成关键词徽章
   */
  function createKeywordBadges() {
    const container = document.createElement('div');
    container.className = 'site-helper-badges';
    container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 16px 0;
    `;

    CONFIG.keywords.forEach(function(word) {
      const badge = document.createElement('span');
      badge.textContent = word;
      badge.style.cssText = `
        background: #f0f4ff;
        color: #4a7fc7;
        padding: 4px 12px;
        border-radius: 16px;
        font-size: 12px;
        font-weight: 500;
        border: 1px solid #d0e0ff;
        cursor: default;
        transition: background 0.2s;
      `;

      // 悬停效果
      badge.addEventListener('mouseenter', function() {
        this.style.background = '#dce8ff';
      });
      badge.addEventListener('mouseleave', function() {
        this.style.background = '#f0f4ff';
      });

      container.appendChild(badge);
    });

    return container;
  }

  /**
   * 创建访问说明文本
   */
  function createAccessNotice() {
    const notice = document.createElement('div');
    notice.className = 'site-helper-notice';
    notice.style.cssText = `
      background: #fffbe6;
      border: 1px solid #ffe58f;
      border-radius: 8px;
      padding: 12px 16px;
      margin: 12px 0;
      font-size: 13px;
      color: #8c6b00;
      line-height: 1.6;
    `;

    notice.innerHTML = `
      <strong>💡 访问提示：</strong><br>
      本站为 <a href="${CONFIG.siteUrl}" style="color:#4a90d9;" target="_blank">${CONFIG.siteUrl}</a> 的辅助脚本。<br>
      如需体验完整功能，请直接访问上述网址。
    `;

    return notice;
  }

  /**
   * 注入辅助组件到页面
   */
  function injectHelper() {
    // 避免重复注入
    if (document.querySelector('.site-helper-card')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'site-helper-wrapper';
    wrapper.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999;';

    // 组装组件
    const card = createInfoCard();
    const badges = createKeywordBadges();
    const notice = createAccessNotice();

    // 插入到卡片内
    const cardBody = card.querySelector('p');
    if (cardBody) {
      card.insertBefore(badges, cardBody.nextSibling);
      card.insertBefore(notice, cardBody.nextSibling);
    }

    wrapper.appendChild(card);
    document.body.appendChild(wrapper);
  }

  // 等待 DOM 加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHelper);
  } else {
    injectHelper();
  }
})();