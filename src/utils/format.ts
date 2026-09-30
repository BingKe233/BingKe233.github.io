/** 日期与阅读时长的通用格式化工具。 */

/** 2026/09/18 —— 等宽字体下对齐更整齐 */
export function formatDate(date: Date): string {
	const y = date.getFullYear();
	const m = String(date.getMonth() + 1).padStart(2, '0');
	const d = String(date.getDate()).padStart(2, '0');
	return `${y}/${m}/${d}`;
}

/**
 * 粗略估算阅读时长：中文按 400 字/分钟，西文按 220 词/分钟，两者相加。
 * 代码块会被剔除，避免把大段代码算进阅读时间。
 */
export function readingTime(body = ''): string {
	const text = body.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`]*`/g, ' ');
	const cjk = (text.match(/[\u3400-\u4dbf\u4e00-\u9fff]/g) ?? []).length;
	const words = (text.replace(/[\u3400-\u4dbf\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g) ?? [])
		.length;
	const minutes = Math.max(1, Math.round(cjk / 400 + words / 220));
	return `约 ${minutes} 分钟`;
}
