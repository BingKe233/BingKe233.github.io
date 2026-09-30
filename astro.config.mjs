// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 站点正式地址：canonical / sitemap / RSS 都依赖它。
	// 仓库名为 BingKe233.github.io，因此站点发布在根路径，无需再设 base。
	site: 'https://bingke233.github.io',
	integrations: [mdx(), sitemap()],
	build: {
		// 不做 CSS 内联：样式统一走可缓存的外链文件，多页站不会每页重复一份
		inlineStylesheets: 'never',
	},
	markdown: {
		// 代码块双主题：明暗模式各自一套配色（输出 --shiki-light / --shiki-dark 变量）
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			wrap: false,
		},
	},
});
