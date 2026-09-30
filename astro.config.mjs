// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 上线前改成自己的域名（RSS / sitemap / canonical 都依赖它）
	site: 'https://blog.example.com',
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
