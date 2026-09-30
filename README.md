# 张三的个人站

一个纯静态的个人网站 + 博客（Astro 构建，产物零 JS）。
**没有数据库、没有后台、没有登录** —— 所有文章都是 `src/content/blog/` 下的 Markdown 文件。

---

## 一、写一篇新文章（3 步）

### 1. 新建文件

在 `src/content/blog/` 下新建一个 `.md` 文件。

**文件名就是网址**：

| 文件名 | 生成的网址 |
| --- | --- |
| `my-first-post.md` | `/blog/my-first-post/` |
| `2026-review.md` | `/blog/2026-review/` |

> 建议文件名用**英文和短横线**（`hello-world.md`），URL 干净、复制不会变乱码。中文标题写在 `title` 里就行。

### 2. 写上开头这段（frontmatter）

文件**第一行必须是 `---`**，中间是字段，再用 `---` 收尾。下面这段可以直接复制：

```markdown
---
title: '文章标题'
description: '一句话摘要。会出现在列表页、搜索结果和 RSS 里。'
pubDate: '2026-09-20'
tags: ['随笔', '工具']
draft: false
---

正文从这里开始。用 Markdown 写。
```

### 3. 写正文

普通 Markdown 就行：

```markdown
## 二级标题

一段正文，可以**加粗**、*斜体*、`行内代码`，也可以放[链接](https://example.com)。

- 列表项
- 列表项

> 引用

| 表头 | 表头 |
| --- | --- |
| 单元格 | 单元格 |

​```python
print('代码块会自动高亮，并且跟随明暗主题换配色')
​```
```

---

## 二、开头的字段说明

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | ✅ | 文章标题 |
| `description` | ✅ | 一句话摘要（列表页 / SEO / RSS 都用它） |
| `pubDate` | ✅ | 发布日期，写成 `'2026-09-20'` |
| `tags` | ⭕ | 标签数组，如 `['随笔', '前端']`。留空就不显示。**写了标签会自动出现在 `/tags/` 页** |
| `draft` | ⭕ | `true` = 草稿，**只在本地可见，不会进构建产物**（列表、RSS、标签页、页面全部不生成）。默认 `false` |
| `updatedDate` | ⭕ | 有修改时写，文章页会显示"更新于 …" |
| `heroImage` | ⭕ | 文章封面图，写相对路径，如 `'../../assets/cover.jpg'`，图片文件放 `src/assets/`。会自动压缩转 webp |

**只要 `title`、`description`、`pubDate` 三个填了，文章就能正常显示。**

---

## 三、草稿：先写不发

正在写、还不想公开的文章，加上：

```yaml
draft: true
```

它就不会出现在任何地方 —— 但**本地开发时照样能预览**（方便你看排版）。写完了把 `draft` 改成 `false`（或整行删掉）即可。

---

## 四、本地预览

```bash
npm run dev
```

然后打开终端提示的地址（通常是 http://localhost:4321）。改文件会即时刷新。

看**最终构建产物**长什么样（和线上完全一致）：

```bash
npm run build     # 生成 dist/
npm run preview   # 预览 dist/，注意用 localhost 而不是 127.0.0.1
```

---

## 五、发布上线（已配置好，推送到 main 即自动发布）

站点通过 **GitHub Actions 自动构建并发布到 GitHub Pages**。

- 仓库：`bingke2333.github.io`（公开）
- 线上地址：**https://bingke2333.github.io/**
- 工作流：`.github/workflows/deploy.yml`

### 两条发布路径

**① 在网页上写（推荐，手机也能用）**

1. 打开 `https://github.com/bingke2333/bingke2333.github.io`
2. 进入 `src/content/blog/`
3. 点 **Add file → Create new file**，文件名写 `my-post.md`
4. 粘贴 frontmatter + 正文
5. 拉到下面点 **Commit changes**

提交后工作流自动跑：装依赖 → 构建 → 发布，**约 1 分钟上线**。
在仓库的 **Actions** 标签页可以看到进度，绿勾即成功。

> 改已有文章同理：点开 `.md` 文件 → 右上角铅笔图标 → 改 → Commit。

**② 本地写完再推**

```bash
npm run build          # 先在本地确认没问题
git add -A
git commit -m "新文章：xxx"
git push
```

### 手动重新发布

仓库 **Actions** → 左侧「构建并部署到 GitHub Pages」→ 右上 **Run workflow**。

> ⚠️ **草稿不等于私密**：`draft: true` 只是不上网站，源文件仍在**公开仓库**里能被看到。
> 真正不想公开的内容，先别提交进仓库。
>
> ⚠️ **不要改仓库名**：现在站点发布在根路径（`/`），所以站内链接写的是 `/blog/` 这种绝对路径。
> 一旦改名，站点会落到子路径，必须同时设置 `astro.config.mjs` 的 `base` 并改写全部站内链接。
>
> 💡 想让国内访问更快：可在 Cloudflare Pages 里「Connect repo」指向同一个仓库（构建命令 `npm run build`，输出目录 `dist`），
> 它会自动识别 Astro。这样等于多一个更快的镜像站，GitHub Pages 仍可保留。

---

## 六、常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地开发服务器，带热更新 |
| `npm run build` | 构建到 `dist/` |
| `npm run preview` | 本地预览 `dist/` |
| `npm run astro -- --help` | Astro CLI 帮助 |

---

## 七、想改外观

| 想改什么 | 改哪里 |
| --- | --- |
| 站名、副标题、导航、社交链接、页脚 | `src/consts.ts`（一个文件搞定） |
| 首页主视觉的短句、简介、主题词 | `src/consts.ts` 里的 `HERO_*` |
| 配色、字体、间距、圆角 | `src/styles/global.css` 顶部的**设计令牌**（`:root` 里的 `--accent`、`--bg` 等） |
| 深色模式配色 | 同文件里的 `:root[data-theme='dark']` |
| 首页标识卡插画 | `src/components/SitePortrait.astro`（内联 SVG） |

暗色/浅色三态切换在页头右上角（跟随系统 → 浅色 → 深色），偏好存在浏览器本地。

---

## 八、目录结构

```text
personal-site/
├── src/
│   ├── content/blog/     ← 你的文章都放这里（.md / .mdx）
│   ├── components/       ← 页头、页脚、文章卡片、标识卡
│   ├── layouts/          ← BaseLayout（全站外壳）、BlogPost（文章页）
│   ├── pages/            ← 路由：文件路径 = URL
│   ├── styles/global.css ← 设计系统
│   └── consts.ts         ← 站点信息
├── public/               ← 原样复制的静态文件（favicon 等）
└── astro.config.mjs      ← 站点域名、代码高亮主题
```

---

## 九、功能一览

- Markdown / MDX 写作，代码块自动高亮（明暗双主题）
- 标签系统（自动汇总 + 标签页）
- 草稿机制（`draft: true` 不进产物）
- RSS（`/rss.xml`）、sitemap、robots
- 深色模式（跟随系统 / 手动切换，无首屏闪烁）
- 阅读时长、上下篇位置感（日期 + 标签）
- 完全静态：**产物里一行 JS 都没有**，构建约 1 秒，全部页面 ~100 KB

---

## 十、License

站点内容版权归作者所有；构建模板部分沿用 Astro 官方 blog 模板（MIT）。
