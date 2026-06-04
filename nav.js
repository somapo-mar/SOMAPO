// onclickが既にある要素はスキップする安全なクリック追加
function addClick(selector, handler) {
  document.querySelectorAll(selector).forEach(el => {
    if (!el.getAttribute('onclick')) {
      el.addEventListener('click', handler);
    }
  });
}

// カテゴリカード → data-cat属性からURLを決定
document.querySelectorAll('.g-card, .bento-card').forEach(card => {
  if (!card.getAttribute('onclick')) {
    const cat = card.getAttribute('data-cat') || 'sowasowa';
    card.addEventListener('click', () => {
      window.location.href = 'list.html?cat=' + cat;
    });
  }
});

// おすすめカード
const recCard = document.querySelector('.recommend-card');
if (recCard && !recCard.getAttribute('onclick')) {
  recCard.addEventListener('click', () => {
    window.location.href = 'detail.html?cat=sowasowa&idx=0';
  });
}

// 横スクロールのpick-card
document.querySelectorAll('.pick-card').forEach(card => {
  if (!card.getAttribute('onclick')) {
    const cat  = card.getAttribute('data-cat') || 'sowasowa';
    const idx  = card.getAttribute('data-idx') || '0';
    card.addEventListener('click', () => {
      window.location.href = `detail.html?cat=${cat}&idx=${idx}`;
    });
  }
});

// ボトムナビ
const navPages = ['index.html', 'list.html', 'favorite.html', 'index.html'];
document.querySelectorAll('.nav-item').forEach((item, i) => {
  if (navPages[i]) item.addEventListener('click', () => {
    window.location.href = navPages[i];
  });
});

// 戻るボタン
const backBtn = document.querySelector('.back-btn');
if (backBtn && !backBtn.getAttribute('onclick')) {
  backBtn.addEventListener('click', () => history.back());
}

