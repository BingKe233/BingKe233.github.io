---
title: '用 Astro 搭一个个人站：从空目录到上线'
description: '记录这次把个人网站和博客一起搭起来的过程，包括选型理由、目录结构和构建产物实测数据。'
pubDate: '2026-09-18'
tags: ['Astro', '前端']
---

这篇文章记录本站的搭建过程。目标很朴素：一个放长文的地方，能写 Markdown，打开快，不用维护数据库。

## 为什么选 Astro

| 方案 | 优势 | 代价 |
| --- | --- | --- |
| Astro | 默认零 JS、Markdown 开箱即用、生态成熟 | 需要 Node 环境 |
| Hugo | 单个二进制、构建极快 | 模板语法上手慢 |
| Next.js | 想扩展成全栈应用时最顺 | 对纯博客偏重 |

结论：**纯内容站选 Astro 或 Hugo，想以后长成应用再选 Next.js。**

## 目录结构

```
src/
├── content/blog/     # 文章，一篇一个 .md
├── components/       # 可复用组件
├── layouts/          # 页面骨架
└── pages/            # 路由：文件路径即 URL
```

## 写代码也很自然

Astro 组件里可以直接写 TypeScript，构建时执行：

```ts
const posts = await getCollection('blog', ({ data }) => !data.draft);
const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
```

注意 `draft: true` 的文章不会进入构建产物，也不会出现在标签页里。

## 发布流程

1. 新建 `src/content/blog/xxx.md`
2. 写好 frontmatter（标题、描述、日期、标签）
3. `npm run build` 生成静态文件
4. 把 `dist/` 推到托管平台

整个过程不需要数据库，也不需要服务器。
