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
      buildFilterBar();
      initReviews();
      handleHash();
    })
    .catch(() => {
      console.warn('Could not load reviews.json');
    });
}

function bushiImg(score, size = '') {
  return `<img src="images/bushi/bushi-${score}.png" alt="Score: ${score}/10" class="bushi-score${size ? '-' + size : ''}" onerror="this.style.display='none'">`;
}

function getDlcCount(review) {
  return reviews.filter(r => r.type === 'dlc' && r.parentGame && r.parentGame.toLowerCase() === review.title.toLowerCase()).length;
}

function renderCard(review, clickable = true) {
  const img = review.image
    ? `<img src="${review.image}" alt="${review.title}" class="card-img">`
    : `<div class="card-img-placeholder">${review.title.charAt(0)}</div>`;

  const isDlc = review.type === 'dlc';
  const dlcLabel = isDlc && review.parentGame
    ? `<div class="card-dlc-label"><span class="card-dlc-badge">DLC</span> ${review.parentGame}</div>`
    : '';

  const dlcCount = !isDlc ? getDlcCount(review) : 0;
  const dlcCountBadge = dlcCount > 0
    ? `<div class="card-dlc-count"><span class="dlc-accordion-icon">▸</span> ${dlcCount} DLC ${dlcCount === 1 ? 'Review' : 'Reviews'}</div>`
    : '';

  return `
    <div class="review-card${isDlc ? ' review-card--dlc' : ''}" ${clickable ? `onclick="openReview(${review.id})"` : ''}>
      ${img}
      <div class="card-body">
        ${dlcLabel}
        <h3 class="card-title">${review.title}</h3>
        <div class="card-info-row">
          <div class="card-info-left">
            <span class="card-platform">${review.platform}</span>
            ${dlcCountBadge}
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
  history.pushState(null, '', ' ');
  window.scrollTo(0, 0);
}

function openReview(id) {
  const review = reviews.find(r => r.id === id);
  if (!review) return;

  const detail = document.getElementById('review-detail');
  const heroImg = review.image
    ? `<div class="review-detail-img" style="background-image: url('${review.image}')"></div>`
    : '';

  const ytLink = review.youtubeUrl
    ? `<a href="${review.youtubeUrl}" target="_blank" rel="noopener" class="yt-review-link">
        <svg viewBox="0 0 90 63" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M88.1 9.9C87.1 6.3 84.3 3.5 80.7 2.5C73.6 0.6 45.4 0.6 45.4 0.6C45.4 0.6 17.2 0.6 10.1 2.5C6.5 3.5 3.7 6.3 2.7 9.9C0.8 17 0.8 31.5 0.8 31.5C0.8 31.5 0.8 46 2.7 53.1C3.7 56.7 6.5 59.5 10.1 60.5C17.2 62.4 45.4 62.4 45.4 62.4C45.4 62.4 73.6 62.4 80.7 60.5C84.3 59.5 87.1 56.7 88.1 53.1C90 46 90 31.5 90 31.5C90 31.5 90 17 88.1 9.9Z" fill="#FF0000"/>
          <path d="M36.4 44.9L59.4 31.5L36.4 18.1V44.9Z" fill="white"/>
        </svg>
        Watch the video review
      </a>`
    : '';

  const isDlc = review.type === 'dlc';
  const dlcParentLine = isDlc && review.parentGame
    ? `<div class="review-detail-dlc-label"><span class="card-dlc-badge">DLC</span> ${review.parentGame}</div>`
    : '';

  // Find DLC children for this game
  const dlcChildren = reviews.filter(r => r.type === 'dlc' && r.parentGame && r.parentGame.toLowerCase() === review.title.toLowerCase()).reverse();
  const dlcAccordion = (!isDlc && dlcChildren.length > 0)
    ? `<div class="dlc-accordion">
        <button class="dlc-accordion-toggle" onclick="this.closest('.dlc-accordion').classList.toggle('open')">
          <span class="dlc-accordion-icon">▸</span>
          DLC ${dlcChildren.length === 1 ? 'Review' : 'Reviews'} <span class="dlc-accordion-count">${dlcChildren.length}</span>
        </button>
        <div class="dlc-accordion-body" style="max-height:${5 * 48}px; overflow-y:auto;">
          ${dlcChildren.map(d => `
            <div class="dlc-accordion-item" onclick="openReview(${d.id})">
              <span class="dlc-accordion-title">${d.title}</span>
              <div class="dlc-accordion-right">
                <span class="dlc-accordion-date">${d.date}</span>
                ${bushiImg(d.score, 'small')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>`
    : '';

  detail.innerHTML = `
    ${heroImg}
    <div class="review-detail-hero">
      <div class="review-detail-inner">
        <button class="back-btn" onclick="closeReview()">← Back to reviews</button>
        ${dlcParentLine}
        <h1 class="review-detail-title">${review.title}</h1>
        <div class="review-detail-meta-row">
          <div class="review-detail-meta-left">
            <div class="review-detail-platform">${review.platform}</div>
            <div class="review-detail-date">${review.date}</div>
          </div>
          ${ytLink}
        </div>
        ${dlcAccordion}
      </div>
    </div>
    <div class="review-body">
      ${review.content.map(block =>
        block.type === 'heading'
          ? `<h2>${block.text}</h2>`
          : marked.parse(block.text)
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
  history.pushState(null, '', '#review-' + id);
  window.scrollTo(0, 0);
}

function closeReview() {
  document.getElementById('review-detail').classList.remove('active');
  navigateTo('page-reviews');
}

function handleHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#review-')) {
    const id = parseInt(hash.replace('#review-', ''));
    if (!isNaN(id)) {
      openReview(id);
      return true;
    }
  }
  return false;
}

function initHome() {
  const featured = reviews
    .filter(r => r.featured)
    .slice(0, 3);
  document.getElementById('home-reviews').innerHTML = featured.map(r => renderCard(r)).join('');
}

function buildFilterBar() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  // Count reviews per IP tag
  const counts = {};
  reviews.forEach(r => {
    if (r.ip) counts[r.ip] = (counts[r.ip] || 0) + 1;
  });

  // Sort by count descending
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const top3 = sorted.slice(0, 3);
  const rest = sorted.slice(3);

  // Label formatter: capitalise each word
  const label = ip => ip.replace(/\b\w/g, c => c.toUpperCase());

  const makeBtn = ([ip]) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = ip;
    btn.textContent = label(ip);
    btn.addEventListener('click', () => initReviews(ip));
    return btn;
  };

  // Clear everything except the All button
  bar.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.dataset.filter = 'all';
  allBtn.textContent = 'All';
  allBtn.addEventListener('click', () => initReviews('all'));
  bar.appendChild(allBtn);

  top3.forEach(entry => bar.appendChild(makeBtn(entry)));

  if (rest.length > 0) {
    // Hidden extra buttons
    const extras = document.createElement('span');
    extras.className = 'filter-extras';
    extras.style.display = 'none';
    rest.forEach(entry => extras.appendChild(makeBtn(entry)));
    bar.appendChild(extras);

    // More / Less toggle
    const toggle = document.createElement('button');
    toggle.className = 'filter-btn filter-more';
    toggle.textContent = 'More ▾';
    toggle.addEventListener('click', () => {
      const open = extras.style.display !== 'none';
      extras.style.display = open ? 'none' : 'inline-flex';
      toggle.textContent = open ? 'More ▾' : 'Less ▴';
    });
    bar.appendChild(toggle);
  }
}

function initReviews(filter = 'all') {
  let baseGames;
  if (filter === 'all') {
    baseGames = reviews.filter(r => r.type !== 'dlc');
  } else {
    baseGames = reviews.filter(r => r.type !== 'dlc' && r.ip && r.ip.includes(filter));
  }

  document.getElementById('all-reviews').innerHTML = baseGames.map(r => renderCard(r)).join('');

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

  
});
