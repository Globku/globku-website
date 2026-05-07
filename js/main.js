const reviews = [
  {
    id: 1,
    title: "Blue Protocol",
    genre: "MMORPG",
    platform: "PC",
    score: 72,
    date: "March 2025",
    excerpt: "A visually stunning anime MMO that struggles to differentiate itself in a crowded genre, but offers enough charm for fans of the aesthetic.",
    content: `
      <p>Blue Protocol arrived with significant hype — a gorgeous anime-style MMORPG from Bandai Namco that promised to blend action combat with rich online worlds. After spending considerable time with it, the picture is more complicated than the trailers suggested.</p>
      <h2>Combat & Gameplay</h2>
      <p>The action combat is genuinely satisfying. Each class has a distinct feel, and the visual flair of every skill makes combat feel cinematic rather than mechanical. The dodge-cancel system adds a layer of depth that rewards investment.</p>
      <p>Where Blue Protocol stumbles is in its quest design and early-game pacing. The main story is competently told but leans heavily on anime tropes without subverting them. Side quests are largely fetch-based, and the open world feels slightly underpopulated outside of designated gathering areas.</p>
      <h2>Visuals & Presentation</h2>
      <p>This is where the game genuinely excels. The cel-shaded art direction is exceptional, capturing the look of a high-budget anime with remarkable consistency. Character customization is deep enough to feel personal without becoming overwhelming. Boss encounter design is dramatic and memorable.</p>
      <h2>Social & Endgame</h2>
      <p>The MMO framework is functional but unambitious. Guilds, raids, and the trading system all work, but none of them push the genre forward. Blue Protocol is a solid foundation that would benefit from more distinguishing features at its core loop.</p>
    `,
    verdict: "Blue Protocol is a beautiful anime MMO that does most things competently but few things exceptionally. If the art style speaks to you and you're looking for an accessible online experience, there's genuine fun here — just don't expect genre-defining ambition.",
    featured: true
  },
  {
    id: 2,
    title: "Granblue Fantasy: Relink",
    genre: "Action RPG",
    platform: "PC / PS5",
    score: 88,
    date: "February 2025",
    excerpt: "A near-perfect translation of a beloved gacha universe into an action RPG, with combat that ranks among the genre's best.",
    content: `
      <p>Granblue Fantasy: Relink had an enormous task: bring one of mobile gaming's most beloved universes into the premium action RPG space and satisfy both longtime fans and newcomers. It succeeds almost entirely.</p>
      <h2>Combat Design</h2>
      <p>The combat is spectacular. Each character in the roster plays completely differently — not in the way of minor stat adjustments, but in fundamental mechanical expression. Narmaya's stance-switching, Zeta's charge mechanics, Katalina's support-hybrid role. You could spend dozens of hours mastering just the roster's breadth.</p>
      <p>The combo architecture has enough depth for skilled players to optimize without gating casual players behind execution barriers. Link Attacks and Skybound Arts create constant moments of visual spectacle synchronized with meaningful gameplay impact.</p>
      <h2>Story & World</h2>
      <p>Players new to Granblue may find the early story expecting familiarity with a large cast, but the core narrative of Relink is self-contained enough to follow. Longtime fans will find it a love letter to the source material.</p>
      <h2>Endgame & Longevity</h2>
      <p>The endgame is where Relink earns its highest marks. Proud and Proud+ difficulty content provides genuine challenge, and the build optimization loop is satisfying without becoming a second job. Regular content updates have extended the game's lifespan well beyond launch.</p>
    `,
    verdict: "Granblue Fantasy: Relink is one of the finest action RPGs in years. Its combat is a genuine achievement, its fanservice is earned, and its endgame delivers the kind of loop that makes 100-hour playtimes feel natural. Essential for fans of the genre.",
    featured: true
  },
  {
    id: 3,
    title: "Dragon Ball: Sparking! Zero",
    genre: "Fighting",
    platform: "PC / PS5 / Xbox",
    score: 85,
    date: "January 2025",
    excerpt: "The Budokai Tenkaichi revival delivers the chaos and scale of Dragon Ball combat in a package that understands exactly what fans wanted.",
    content: `
      <p>Dragon Ball: Sparking! Zero is the game that Dragon Ball fans have been asking for since the Budokai Tenkaichi series ended on PS2/PS3. After nearly two decades, the return arrives with its chaotic energy fully intact.</p>
      <h2>The Fighting System</h2>
      <p>The signature 3D arena combat returns with refinements rather than reinvention. Vanish exchanges, ki-charged showdowns, environmental destruction — it's all here, and the feel is faithful to the original while substantially more responsive. The skill floor is accessible; the skill ceiling for competitive play is genuinely high.</p>
      <p>The roster is enormous by any measure, covering Dragon Ball, Z, Super, and GT with an attention to character-specific move accuracy that will delight franchise veterans.</p>
      <h2>Episode Battles</h2>
      <p>The narrative mode faithfully adapts the Dragon Ball story while introducing branching paths that let you rewrite famous moments. It's not a deep story mode, but as a vehicle for replaying iconic fights with new outcomes, it's enormously entertaining.</p>
      <h2>Multiplayer</h2>
      <p>Online performance at launch was inconsistent, with noticeable rollback issues in high-lag matches. Subsequent patches improved stability, and the ranked mode provides a competitive framework for dedicated players.</p>
    `,
    verdict: "Sparking! Zero is the Dragon Ball arena fighter fans deserved. It's not a revolution, but it's a deeply faithful, technically competent revival that captures the series' kinetic energy better than anything since the originals.",
    featured: false
  },
  {
    id: 4,
    title: "Sword Art Online: Last Recollection",
    genre: "Action RPG",
    platform: "PC / PS4 / PS5",
    score: 61,
    date: "December 2024",
    excerpt: "A serviceable SAO entry that will satisfy fans of the IP but struggles to justify itself to anyone unfamiliar with the source material.",
    content: `
      <p>The Sword Art Online game series occupies a peculiar space — they're games made almost entirely for fans of the anime rather than games that stand on their own merits. Last Recollection continues that tradition, for better and worse.</p>
      <h2>For The Fans</h2>
      <p>If you love SAO, Last Recollection delivers. The character writing captures the anime's voice, the voice acting is excellent, and seeing the cast in a new adventure with meaningful interactions is the game's greatest strength. Fan service here is used in the proper sense — moments that reward familiarity.</p>
      <h2>As a Game</h2>
      <p>The combat is functional but rarely exciting. The action RPG framework provides adequate moment-to-moment engagement, but the systems don't interconnect with enough depth to create a compelling loop. The open areas feel large without feeling full, and traversal becomes repetitive by the midpoint.</p>
      <p>Visually the game is competent but unspectacular by current standards, and performance optimization on PC at launch required patching to reach a stable state.</p>
    `,
    verdict: "SAO: Last Recollection is a game that knows its audience and serves them adequately. If you're a fan, there's enough here to make it worthwhile. If you're not, there's nothing to convert you.",
    featured: false
  },
  {
    id: 5,
    title: "Honkai: Star Rail",
    genre: "Turn-Based RPG",
    platform: "PC / Mobile / PS5",
    score: 90,
    date: "November 2024",
    excerpt: "HoYoverse's turn-based RPG demonstrates that the gacha genre and genuinely excellent game design are not mutually exclusive.",
    content: `
      <p>Honkai: Star Rail launched into a market where gacha skepticism was at an all-time high — and proceeded to win over a significant portion of that skeptical audience. The reason is simple: it's a genuinely well-designed RPG that happens to have gacha monetization, rather than a monetization framework with RPG trappings attached.</p>
      <h2>Combat System</h2>
      <p>The turn-based combat is the game's centerpiece, and it earns that position. The break system — identifying and exploiting elemental weaknesses to shatter enemy toughness bars — creates a puzzle-like engagement that rewards understanding over grinding. Team composition matters in a way that feels strategic rather than gatekeeping.</p>
      <p>Endgame modes like Memory of Chaos and Pure Fiction provide escalating challenge that demands optimized builds and thoughtful team selection without requiring gacha spending to clear.</p>
      <h2>Writing & Presentation</h2>
      <p>The story is HoYoverse's most ambitious yet — operatic in scale with character writing that takes genuine risks. The Penacony arc in particular demonstrates a willingness to subvert expectations that distinguished it from contemporaries.</p>
    `,
    verdict: "Honkai: Star Rail is the best argument for free-to-play gacha gaming done right. Its combat is excellent, its writing punches above the genre's weight, and the free-to-play experience is genuinely respectful. One of the best RPGs available regardless of price.",
    featured: true
  },
  {
    id: 6,
    title: "Naruto x Boruto: Ultimate Ninja Storm Connections",
    genre: "Fighting",
    platform: "PC / PS4 / PS5 / Switch",
    score: 69,
    date: "October 2024",
    excerpt: "A competent franchise anniversary celebration that leans too heavily on nostalgia over meaningful evolution.",
    content: `
      <p>The Ultimate Ninja Storm series has always prioritized accessibility and spectacle over competitive depth, and Connections continues that tradition as a celebration of the franchise's 20th anniversary.</p>
      <h2>Roster & Content</h2>
      <p>The roster scope is the game's headline feature — over 130 characters covering the full Naruto timeline. Fan favorites are represented with care, and the new Story Connection mode presents a condensed but earnest tour through the series' key moments.</p>
      <h2>Gameplay</h2>
      <p>The combat system is largely unchanged from previous entries, which will read as either a feature or a flaw depending on your expectations. It remains immediately accessible and visually impressive, but shows its age compared to more mechanically ambitious fighting games. Competitive players will find a shallow ceiling.</p>
      <p>The balance between characters is noticeably uneven, with certain roster additions feeling rushed. Online performance is adequate but without rollback netcode, high-latency matches suffer.</p>
    `,
    verdict: "Ultimate Ninja Storm Connections is comfort food for Naruto fans — familiar, pleasing, and not particularly nutritious. The value proposition depends entirely on your attachment to the IP.",
    featured: false
  }
];

function getScoreClass(score) {
  if (score >= 85) return 'score-great';
  if (score >= 70) return 'score-good';
  if (score >= 55) return 'score-ok';
  return 'score-bad';
}

function renderCard(review, clickable = true) {
  return `
    <div class="review-card" ${clickable ? `onclick="openReview(${review.id})"` : ''}>
      <div class="card-img-placeholder">${review.title.charAt(0)}</div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-genre">${review.genre}</span>
          <span class="card-platform">${review.platform}</span>
        </div>
        <h3 class="card-title">${review.title}</h3>
        <p class="card-excerpt">${review.excerpt}</p>
        <div class="card-footer">
          <span class="card-date">${review.date}</span>
          <span class="score-badge ${getScoreClass(review.score)}">${review.score}</span>
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
  detail.innerHTML = `
    <div class="review-detail-hero">
      <div class="review-detail-inner">
        <button class="back-btn" onclick="closeReview()">← Back to reviews</button>
        <div class="card-meta" style="margin-bottom: 1rem;">
          <span class="card-genre">${review.genre}</span>
          <span class="card-platform">${review.platform}</span>
        </div>
        <h1 class="review-detail-title">${review.title}</h1>
        <div class="review-detail-meta">
          <span class="score-badge ${getScoreClass(review.score)}" style="font-size: 2rem; padding: 0.3rem 0.9rem;">${review.score}</span>
          <span class="card-date" style="font-size: 0.85rem;">${review.date}</span>
        </div>
        <p style="font-size:1rem; color: var(--text-secondary); max-width: 600px; line-height: 1.7;">${review.excerpt}</p>
      </div>
    </div>
    <div class="review-body">
      ${review.content}
      <div class="verdict-box">
        <div class="verdict-label">Verdict</div>
        <p>${review.verdict}</p>
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
  const filtered = filter === 'all' ? reviews : reviews.filter(r => r.genre.toLowerCase().includes(filter));
  document.getElementById('all-reviews').innerHTML = filtered.map(r => renderCard(r)).join('');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHome();
  initReviews();

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
