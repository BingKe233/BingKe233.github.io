// 站点全局数据：改这一个文件就能换掉整站的品牌信息。

export const SITE_TITLE = '张三的个人站';
export const SITE_DESCRIPTION = '一个用来放长文、笔记和作品的地方。';
export const SITE_LANG = 'zh-CN';

/** 页头字标左侧的印章字符（单字效果最好，楷体渲染） */
export const BRAND_MARK = '张';
/** 字标下方的等宽小字 */
export const BRAND_SUB = "ZHANGSAN'S NOTEBOOK";

/** 主视觉小标（等宽大写，宽字距） */
export const HERO_EYEBROW = "ZHANGSAN'S NOTEBOOK";
/** 主视觉两行短句；第二行用主题色高亮 */
export const HERO_LINE_1 = '写下来，';
export const HERO_LINE_2 = '才算真的想过。';
/** 主视觉副文案 */
export const HERO_BIO = '想看清一个人在想什么，就看他愿意公开写下什么。这里放长文、笔记，和一些做过的东西。';

/** 站点标识卡的署名 */
export const SITE_AUTHOR = '张三';
export const SITE_AUTHOR_ALT = '/ Zhang San';

/** 首页细线主题条上的词 */
export const HERO_TOPICS = ['随笔', '前端', '工具', '读书'];

/** 主按钮 */
export const HERO_CTA = { href: '/blog/', label: '所有文章' };

/** 主视觉右侧的社交链接 */
export const SOCIAL_LINKS = [
	{ href: 'https://github.com/', label: 'GitHub', external: true },
	{ href: '/rss.xml', label: 'RSS', external: false },
	{ href: 'mailto:hello@example.com', label: '邮箱', external: false },
];

/** 顶部导航 */
export const NAV_LINKS = [
	{ href: '/', label: '首页' },
	{ href: '/blog/', label: '文章' },
	{ href: '/tags/', label: '标签' },
	{ href: '/about/', label: '关于' },
];

/** 页脚 */
export const FOOTER_LINKS = [
	{ href: '/rss.xml', label: 'RSS' },
	{ href: '/sitemap-index.xml', label: 'Sitemap' },
	{ href: 'https://github.com/', label: 'GitHub', external: true },
];
export const FOOTER_NOTE = 'BUILT WITH ASTRO · NO TRACKERS · NO COOKIES';
