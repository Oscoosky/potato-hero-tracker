/* ============================================
   土豆侠追踪器 | Potato Hero Tracker
   Main JavaScript
   ============================================ */

// --- Data ---
const sightingData = [
    {
        id: 13,
        type: 'fan',
        icon: '🍿',
        location: '长沙，湖南，中国',
        lat: 28.2282,
        lng: 112.9388,
        title: '土豆侠现身电影院看蜘蛛侠！',
        time: '30 分钟前',
        description: '多名观众在长沙IFS影城目击土豆侠买了一大桶爆米花，正在观看《蜘蛛侠》电影！目击者称土豆侠看到精彩处激动得土豆皮都发光了，还说"这蜘蛛侠真不错，回头我也学两招"。散场后土豆侠迅速消失在人群中。',
        badge: '粉丝目击',
        badgeClass: 'badge-fan',
        tagClass: 'tag-fan',
        imageEmoji: '🎬🥔🕷️'
    },
    {
        id: 1,
        type: 'hero',
        icon: '🥔',
        location: '北京，中国',
        lat: 39.9042,
        lng: 116.4074,
        title: '土豆侠现身天安门广场！',
        time: '2 小时前',
        description: '多名游客目击土豆侠在天安门广场附近出现，疑似在执行秘密任务。据目击者称，土豆侠用土豆能量帮助了一位迷路的小朋友找到了家人。',
        badge: '英雄现身',
        badgeClass: 'badge-hero',
        tagClass: 'tag-hero',
        imageEmoji: '🏛️🥔✨'
    },
    {
        id: 2,
        type: 'fan',
        icon: '👀',
        location: '上海，中国',
        lat: 31.2304,
        lng: 121.4737,
        title: '外滩粉丝拍到模糊身影',
        time: '5 小时前',
        description: '一位粉丝在浦东陆家嘴拍到了一个快速移动的棕色身影，照片虽然模糊，但特征与土豆侠高度吻合。社区正在热烈讨论中！',
        badge: '粉丝目击',
        badgeClass: 'badge-fan',
        tagClass: 'tag-fan',
        imageEmoji: '🌃🏙️👀'
    },
    {
        id: 3,
        type: 'event',
        icon: '🎪',
        location: '广州，中国',
        lat: 23.1291,
        lng: 113.2644,
        title: '土豆侠粉丝见面会预告',
        time: '1 天前',
        description: '广州塔附近将举办大型土豆侠主题粉丝活动，届时将有cosplay比赛、主题美食和神秘嘉宾。土豆侠本人可能会现身！',
        badge: '特殊事件',
        badgeClass: 'badge-event',
        tagClass: 'tag-event',
        imageEmoji: '🗼🎪🥔'
    },
    {
        id: 4,
        type: 'hero',
        icon: '🥔',
        location: '成都，中国',
        lat: 30.5728,
        lng: 104.0668,
        title: '宽窄巷子出现土豆能量波动',
        time: '8 小时前',
        description: '春熙路附近检测到异常的土豆能量信号，当地粉丝报告称看到一道棕金色闪光划过天空。土豆侠追踪器已确认该信号。',
        badge: '英雄现身',
        badgeClass: 'badge-hero',
        tagClass: 'tag-hero',
        imageEmoji: '🐼🥔⚡'
    },
    {
        id: 5,
        type: 'fan',
        icon: '📸',
        location: '深圳，中国',
        lat: 22.5431,
        lng: 114.0579,
        title: '科技园区的神秘土豆标记',
        time: '12 小时前',
        description: '深圳南山科技园的多处墙壁上发现土豆形状的神秘标记，粉丝们猜测这是土豆侠留下的线索，指向下一个任务地点。',
        badge: '粉丝目击',
        badgeClass: 'badge-fan',
        tagClass: 'tag-fan',
        imageEmoji: '🏢🔍🥔'
    },
    {
        id: 6,
        type: 'hero',
        icon: '🥔',
        location: '东京，日本',
        lat: 35.6762,
        lng: 139.6503,
        title: '涩谷十字路口土豆侠现身',
        time: '1 天前',
        description: '在世界上最繁忙的十字路口，土豆侠突然出现并帮助了一位摔倒的老人。日本粉丝称他为"ポテトヒーロー"。',
        badge: '英雄现身',
        badgeClass: 'badge-hero',
        tagClass: 'tag-hero',
        imageEmoji: '🗾🥔💨'
    },
    {
        id: 7,
        type: 'event',
        icon: '🎬',
        location: '首尔，韩国',
        lat: 37.5665,
        lng: 126.9780,
        title: '土豆侠主题快闪活动',
        time: '2 天前',
        description: '明洞街区举办了土豆侠主题快闪店，限量版周边一小时内售罄。粉丝们排队超过三小时只为获得一张与土豆侠立牌合影的机会。',
        badge: '特殊事件',
        badgeClass: 'badge-event',
        tagClass: 'tag-event',
        imageEmoji: '🎌🛍️🥔'
    },
    {
        id: 8,
        type: 'fan',
        icon: '🎥',
        location: '纽约，美国',
        lat: 40.7128,
        lng: -74.0060,
        title: '时代广场大屏惊现土豆侠',
        time: '3 天前',
        description: '时代广场的巨型屏幕上突然播放了一段土豆侠的动画短片，持续了整整30秒。目前无人知道是谁投放的这段视频。',
        badge: '粉丝目击',
        badgeClass: 'badge-fan',
        tagClass: 'tag-fan',
        imageEmoji: '🗽📺🥔'
    },
    {
        id: 9,
        type: 'hero',
        icon: '🥔',
        location: '伦敦，英国',
        lat: 51.5074,
        lng: -0.1278,
        title: '大本钟旁发现土豆能量残留',
        time: '4 天前',
        description: '伦敦眼附近检测到高浓度土豆能量残留，英国粉丝组织"Potato Watch UK"已派出调查小组前往现场取样分析。',
        badge: '英雄现身',
        badgeClass: 'badge-hero',
        tagClass: 'tag-hero',
        imageEmoji: '🏰🥔🔬'
    },
    {
        id: 10,
        type: 'event',
        icon: '🎉',
        location: '悉尼，澳大利亚',
        lat: -33.8688,
        lng: 151.2093,
        title: '土豆侠海滩清洁行动',
        time: '5 天前',
        description: '邦迪海滩举办了一场以土豆侠为主题的环保活动，数百名志愿者装扮成土豆侠一起清理海滩垃圾。',
        badge: '特殊事件',
        badgeClass: 'badge-event',
        tagClass: 'tag-event',
        imageEmoji: '🏖️🥔♻️'
    },
    {
        id: 11,
        type: 'fan',
        icon: '🔍',
        location: '曼谷，泰国',
        lat: 13.7563,
        lng: 100.5018,
        title: '夜市里的土豆侠传说',
        time: '6 天前',
        description: '曼谷拉差达火车夜市的摊主们开始流传土豆侠的故事，据说有位神秘顾客每晚都点一份土豆料理然后悄然消失。',
        badge: '粉丝目击',
        badgeClass: 'badge-fan',
        tagClass: 'tag-fan',
        imageEmoji: '🛕🍜🥔'
    },
    {
        id: 12,
        type: 'hero',
        icon: '🥔',
        location: '巴黎，法国',
        lat: 48.8566,
        lng: 2.3522,
        title: '埃菲尔铁塔上的土豆光芒',
        time: '1 周前',
        description: '埃菲尔铁塔顶端在深夜短暂闪烁出金色光芒，法国土豆侠粉丝俱乐部声称这绝对是土豆侠的信号。官方尚未回应。',
        badge: '英雄现身',
        badgeClass: 'badge-hero',
        tagClass: 'tag-hero',
        imageEmoji: '🗼🥔✨'
    }
];

const eventData = [
    {
        date: '2026年8月15日',
        title: '土豆侠夏日嘉年华',
        location: '北京 · 朝阳公园',
        description: '一年一度的土豆侠主题夏日庆典，包含cosplay大赛、主题市集、互动游戏和神秘嘉宾亮相。',
        icon: '🎪',
        status: 'upcoming',
        statusText: '即将开始'
    },
    {
        date: '2026年8月20日 - 8月25日',
        title: '全球土豆侠粉丝周',
        location: '线上线下同步',
        description: '全球粉丝同步庆祝活动，线上直播、线下聚会、独家内容发布和粉丝创作大赛。',
        icon: '🌍',
        status: 'upcoming',
        statusText: '即将开始'
    },
    {
        date: '2026年8月8日 - 8月12日',
        title: '土豆侠主题画展',
        location: '上海 · 西岸美术馆',
        description: '多位知名艺术家以土豆侠为灵感创作的主题画展，收益将捐赠给儿童公益组织。',
        icon: '🎨',
        status: 'ongoing',
        statusText: '进行中'
    },
    {
        date: '2026年9月1日',
        title: '土豆侠校园公益行',
        location: '成都 · 多所小学',
        description: '土豆侠走进校园，为孩子们带来趣味科学课和环保教育，传播土豆正能量。',
        icon: '📚',
        status: 'upcoming',
        statusText: '即将开始'
    },
    {
        date: '2026年7月28日',
        title: '土豆侠快闪见面会',
        location: '深圳 · 欢乐海岸',
        description: '土豆侠惊喜现身欢乐海岸，与粉丝互动合影，现场派发限量版纪念品。',
        icon: '⚡',
        status: 'past',
        statusText: '已结束'
    }
];

const socialData = [
    {
        user: 'PotatoHero_Official',
        handle: '@PotatoHero',
        avatar: '🥔',
        content: '感谢全球粉丝的支持！你们的每一条目击报告都在帮助土豆侠追踪器的成长。保持警惕，土豆侠可能就在你身边！ 🥔✨ #土豆侠 #PotatoHero',
        likes: '12.8K',
        reposts: '3.2K',
        time: '1小时前'
    },
    {
        user: '土豆侠粉丝团',
        handle: '@PotatoFanClub',
        avatar: '💛',
        content: '刚收到线报！有人在北京三里屯看到了疑似土豆侠的身影。已经派出了我们的追踪小队去确认。有在现场的朋友吗？请分享照片！ 📸',
        likes: '8.5K',
        reposts: '1.6K',
        time: '3小时前'
    },
    {
        user: '全球英雄观察',
        handle: '@HeroWatchGlobal',
        avatar: '🌐',
        content: '土豆侠的人气持续攀升！我们的最新调查显示，土豆侠已成为2026年最受关注的超级英雄TOP 5。这个从农田走出的英雄正在改变世界。 💪🥔',
        likes: '15.2K',
        reposts: '5.8K',
        time: '6小时前'
    },
    {
        user: '美食侦探',
        handle: '@FoodDetective',
        avatar: '🍽️',
        content: '有趣的现象：每当土豆侠在某城市出没后，当地土豆料理的销量就会暴涨。这真的是巧合吗？我决定做一个深度调查 🕵️ #土豆侠效应',
        likes: '4.3K',
        reposts: '892',
        time: '9小时前'
    },
    {
        user: '动漫资讯速报',
        handle: '@AnimeNewsCN',
        avatar: '📡',
        content: '重磅！传闻知名动画工作室正在筹备土豆侠动画系列。虽然未经官方确认，但业内人士透露第一季已在制作中！🎬 #土豆侠动画化',
        likes: '22.1K',
        reposts: '8.9K',
        time: '12小时前'
    },
    {
        user: 'Cosplay达人_小薯',
        handle: '@LittlePotatoCos',
        avatar: '🎭',
        content: '我的土豆侠cos服终于完成了！用了300个LED灯来模拟土豆能量发光效果。周末的粉丝嘉年华我会穿去，大家来找我玩呀！ 🥔✨ 附上试穿照片~',
        likes: '6.7K',
        reposts: '1.1K',
        time: '1天前'
    }
];

// --- Loading Screen ---
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 1500);
});

// --- Floating Potatoes ---
function createFloatingPotatoes() {
    const container = document.getElementById('floatingPotatoes');
    const emojis = ['🥔', '✨', '⭐', '🍟', '💫', '🥔', '🌟', '🍠'];
    for (let i = 0; i < 30; i++) {
        const el = document.createElement('span');
        el.className = 'floating-potato';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.fontSize = (16 + Math.random() * 32) + 'px';
        el.style.animationDuration = (15 + Math.random() * 25) + 's';
        el.style.animationDelay = Math.random() * 10 + 's';
        el.style.opacity = (0.05 + Math.random() * 0.15);
        container.appendChild(el);
    }
}
createFloatingPotatoes();

// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Mobile Menu ---
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// --- Counter Animation ---
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(eased * target).toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target.toLocaleString();
            }
        }
        requestAnimationFrame(update);
    });
}

// Animate on scroll into view
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(heroStats);
}

// --- Map ---
let map;
let markers = [];

function initMap() {
    // Detect mobile
    const isMobile = window.innerWidth <= 768;

    map = L.map('map', {
        center: [30, 110],
        zoom: 4,
        zoomControl: !isMobile,
        scrollWheelZoom: !isMobile,
        dragging: true,
        tap: true,
        touchZoom: true,
        doubleClickZoom: !isMobile,
        worldCopyJump: true,
        attributionControl: !isMobile,
    });

    // Chinese map tiles - fast in China
    L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        attribution: '&copy; 高德地图 | 土豆侠追踪器',
        subdomains: '1234',
        maxZoom: 18,
    }).addTo(map);

    // Add zoom control at bottom-right on mobile for easier thumb reach
    if (isMobile) {
        L.control.zoom({ position: 'bottomright' }).addTo(map);
    }

    // Add markers
    sightingData.forEach((sighting, index) => {
        const markerEmoji = sighting.type === 'hero' ? '🥔' : sighting.type === 'event' ? '📍' : '👀';
        const markerHtml = `
            <div class="custom-marker">
                <div class="marker-${sighting.type}">${markerEmoji}</div>
            </div>
        `;

        const icon = L.divIcon({
            html: markerHtml,
            className: '',
            iconSize: isMobile ? [36, 36] : [40, 40],
            iconAnchor: isMobile ? [18, 36] : [20, 40],
            popupAnchor: [0, isMobile ? -36 : -40],
        });

        const marker = L.marker([sighting.lat, sighting.lng], { icon }).addTo(map);
        marker.sightingId = sighting.id;

        const popupWidth = isMobile ? 240 : 300;
        const popupContent = `
            <div style="font-family: inherit; min-width: ${popupWidth - 40}px; max-width: ${popupWidth}px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                    <span style="font-size: 24px;">${sighting.icon}</span>
                    <div>
                        <strong style="font-size: 14px;">${sighting.title}</strong>
                        <div style="font-size: 11px; color: #888;">${sighting.location} · ${sighting.time}</div>
                    </div>
                </div>
                <p style="font-size: 12px; color: #b0b8c8; margin: 0; line-height: 1.5;">${sighting.description}</p>
            </div>
        `;

        marker.bindPopup(popupContent, {
            maxWidth: popupWidth,
            className: '',
            closeButton: isMobile,
        });

        marker.on('click', () => {
            highlightSightingInList(sighting.id);
        });

        markers.push(marker);
    });

    // Fit bounds to show all markers
    const bounds = L.latLngBounds(sightingData.map(s => [s.lat, s.lng]));
    map.fitBounds(bounds, { padding: [30, 30], maxZoom: 8 });

    // Fix map size issues on mobile
    setTimeout(() => map.invalidateSize(), 100);
    setTimeout(() => map.invalidateSize(), 500);
    setTimeout(() => map.invalidateSize(), 1000);

    // Handle orientation change
    if (isMobile) {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => map.invalidateSize(), 200);
            setTimeout(() => map.invalidateSize(), 500);
        });

        // Also handle resize for soft keyboard etc
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => map.invalidateSize(), 300);
        });
    }
}

// --- Sighting List Sidebar ---
function populateSightingList() {
    const list = document.getElementById('sightingList');
    sightingData.forEach(sighting => {
        const item = document.createElement('div');
        item.className = 'sighting-item';
        item.dataset.id = sighting.id;
        item.innerHTML = `
            <span class="sighting-item-icon">${sighting.icon}</span>
            <div class="sighting-item-info">
                <div class="sighting-item-location">${sighting.location}</div>
                <div class="sighting-item-time">${sighting.time}</div>
                <span class="sighting-item-tag ${sighting.tagClass}">${sighting.badge}</span>
            </div>
        `;

        item.addEventListener('click', () => {
            const marker = markers.find(m => m.sightingId === sighting.id);
            if (marker && map) {
                map.setView(marker.getLatLng(), 10, { animate: true });
                marker.openPopup();
                highlightSightingInList(sighting.id);
            }
        });

        list.appendChild(item);
    });
}

function highlightSightingInList(id) {
    document.querySelectorAll('.sighting-item').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.id) === id);
    });
}

// --- Sightings Grid ---
function populateSightingsGrid() {
    const grid = document.getElementById('sightingsGrid');
    sightingData.forEach(sighting => {
        const card = document.createElement('div');
        card.className = 'sighting-card';
        card.innerHTML = `
            <div class="sighting-card-image">
                <span class="card-emoji-scene">${sighting.imageEmoji}</span>
                <span class="sighting-card-badge ${sighting.badgeClass}">${sighting.badge}</span>
            </div>
            <div class="sighting-card-body">
                <h3 class="sighting-card-title">${sighting.title}</h3>
                <p class="sighting-card-location">📍 ${sighting.location}</p>
                <p class="sighting-card-time">🕐 ${sighting.time}</p>
                <p class="sighting-card-desc">${sighting.description}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            const marker = markers.find(m => m.sightingId === sighting.id);
            if (marker && map) {
                map.setView(marker.getLatLng(), 10, { animate: true });
                marker.openPopup();
                document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
            }
        });

        grid.appendChild(card);
    });
}

// Load more sightings (simulated)
document.getElementById('loadMoreSightings').addEventListener('click', function() {
    this.textContent = '🥔 没有更多了...';
    this.disabled = true;
    this.style.opacity = '0.5';
    showToast('已加载全部目击报告！');
    setTimeout(() => {
        this.textContent = '加载更多报告 →';
        this.disabled = false;
        this.style.opacity = '1';
    }, 2000);
});

// --- Events Timeline ---
function populateEvents() {
    const timeline = document.getElementById('eventsTimeline');
    eventData.forEach(event => {
        const item = document.createElement('div');
        item.className = 'event-item';

        const statusClass = event.status === 'upcoming' ? 'tag-upcoming' :
                           event.status === 'ongoing' ? 'tag-ongoing' : 'tag-past';

        item.innerHTML = `
            <div class="event-dot-indicator">${event.icon}</div>
            <div class="event-item-content">
                <div class="event-item-date">${event.date}</div>
                <h3 class="event-item-title">${event.title}</h3>
                <p class="event-item-location">📍 ${event.location}</p>
                <p class="event-item-desc">${event.description}</p>
                <span class="event-item-tag ${statusClass}">${event.statusText}</span>
            </div>
        `;

        timeline.appendChild(item);
    });
}

// --- Social Feed ---
function populateSocialFeed() {
    const feed = document.getElementById('socialFeed');
    socialData.forEach(post => {
        const card = document.createElement('div');
        card.className = 'social-card';
        card.innerHTML = `
            <div class="social-card-header">
                <div class="social-avatar">${post.avatar}</div>
                <div>
                    <div class="social-user">${post.user}</div>
                    <div class="social-handle">${post.handle} · ${post.time}</div>
                </div>
            </div>
            <div class="social-card-body">${post.content}</div>
            <div class="social-card-footer">
                <span class="social-stat">💬 ${post.likes}</span>
                <span class="social-stat">🔄 ${post.reposts}</span>
                <span class="social-stat">❤️ 喜欢</span>
            </div>
        `;

        feed.appendChild(card);
    });
}

// --- Downloads ---
function handleDownload(type) {
    const messages = {
        wallpaper: '壁纸包正在准备中，即将开始下载！',
        sticker: '表情包正在打包，请稍候...',
        avatar: '头像包正在生成中...'
    };
    showToast(messages[type] || '下载已开始！');

    // Simulate creating a download
    const content = {
        wallpaper: '🥔 土豆侠壁纸包 - 即将上线\n请关注我们的社交媒体获取最新下载链接！',
        sticker: '😎 土豆侠表情包 - 即将上线\n请关注我们的社交媒体获取最新下载链接！',
        avatar: '🦸 土豆侠头像包 - 即将上线\n请关注我们的社交媒体获取最新下载链接！'
    };

    const blob = new Blob([content[type]], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `potato-hero-${type}-info.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// --- Newsletter ---
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('input');
    const email = input.value.trim();

    if (email) {
        showToast(`🎉 订阅成功！土豆侠的冒险将会第一时间发送到 ${email}`);
        input.value = '';
    }
});

// --- Toast ---
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// --- Scroll Animations ---
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Hero section always visible
    const hero = document.getElementById('hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'none';
    }
}

// --- Smooth Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// --- Init ---
function init() {
    initMap();
    populateSightingList();
    populateSightingsGrid();
    populateEvents();
    populateSocialFeed();
    setupScrollAnimations();

    // Add slight delay for map to properly render
    setTimeout(() => {
        if (map) map.invalidateSize();
    }, 500);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle window resize for map
window.addEventListener('resize', () => {
    if (map) {
        setTimeout(() => map.invalidateSize(), 200);
    }
});

console.log('🥔 土豆侠追踪器已就绪！| Potato Hero Tracker Ready!');
console.log('💛 感谢加入全球土豆侠粉丝社区');
