let reviews = [];

function loadReviews() {
  fetch('reviews.json')
    .then(r => r.json())
    .then(data => {
      reviews = data;
      // Update dynamic review count stat
      const countEl = document.getElementById('review-count-stat');
      if (countEl) {
        const rounded = Math.floor(reviews.length / 10) * 10;
        countEl.textContent = rounded + '+';
      }
      initHome();
      initReviews();
    })
    .catch(() => {
      console.warn('Could not load reviews.json');
    });
}

function bushiImg(score, size = '') {
  return `<img src="images/bushi/bushi-${score}.png" alt="Score: ${score}/10" class="bushi-score${size ? '-' + size : ''}" onerror="this.style.display='none'">`;
}

function renderCard(review, clickable = true) {
  const img = review.image
    ? `<img src="${review.image}" alt="${review.title}" class="card-img">`
    : `<div class="card-img-placeholder">${review.title.charAt(0)}</div>`;

  return `
    <div class="review-card" ${clickable ? `onclick="openReview(${review.id})"` : ''}>
      ${img}
      <div class="card-body">
        <h3 class="card-title">${review.title}</h3>
        <div class="card-info-row">
          <div class="card-info-left">
            <span class="card-platform">${review.platform}</span>
          </div>
          <div class="card-bushi">${bushiImg(review.score)}</div>
          <div class="card-date-right">
            <span class="card-date">${review.date}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
  document.getElementById('review-detail').classList.remove('active');
  window.scrollTo(0, 0);
}

function openReview(id) {
  const review = reviews.find(r => r.id === id);
  if (!review) return;

  const detail = document.getElementById('review-detail');
  const heroImg = review.image
    ? `<div class="review-detail-img" style="background-image: url('${review.image}')"></div>`
    : '';

  detail.innerHTML = `
    ${heroImg}
    <div class="review-detail-hero">
      <div class="review-detail-inner">
        <button class="back-btn" onclick="closeReview()">← Back to reviews</button>
        <h1 class="review-detail-title">${review.title}</h1>
        <div class="review-detail-platform">${review.platform}</div>
        <div class="review-detail-date">${review.date}</div>
      </div>
    </div>
    <div class="review-body">
      ${review.content.map(block =>
        block.type === 'heading'
          ? `<h2>${block.text}</h2>`
          : `<p>${block.text}</p>`
      ).join('')}
      <div class="verdict-box">
        <div class="verdict-left">
          <div class="verdict-label">Verdict</div>
          <p>${review.verdict}</p>
        </div>
        <div class="verdict-score">
          ${bushiImg(review.score, 'large')}
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  detail.classList.add('active');
  window.scrollTo(0, 0);
}

function closeReview() {
  document.getElementById('review-detail').classList.remove('active');
  navigateTo('page-reviews');
}

function initHome() {
  const featured = reviews.filter(r => r.featured).slice(0, 3);
  document.getElementById('home-reviews').innerHTML = featured.map(r => renderCard(r)).join('');
}

function initReviews(filter = 'all') {
  const filtered = filter === 'all' ? reviews : reviews.filter(r => r.ip && r.ip.includes(filter));
  document.getElementById('all-reviews').innerHTML = filtered.map(r => renderCard(r)).join('');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadReviews();

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(a.dataset.page);
    });
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => initReviews(btn.dataset.filter));
  });
});
