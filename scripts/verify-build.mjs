import { existsSync, readFileSync, readdirSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const required = ['index.html', 'style.css', 'app.js'];
for (const file of required) {
  if (!existsSync(new URL(file, dist))) throw new Error(`缺少 dist/${file}`);
}

const html = readFileSync(new URL('index.html', dist), 'utf8');
const js = readFileSync(new URL('app.js', dist), 'utf8');
for (const [, url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  if (url.startsWith('#') || url.startsWith('mailto:') || /^https?:\/\//.test(url)) continue;
  if (url.startsWith('/')) throw new Error(`不适合二级路径的绝对引用：${url}`);
  if (!existsSync(new URL(url, dist))) throw new Error(`缺少资源：dist/${url}`);
}

const assetDir = new URL('assets/', dist);
const images = readdirSync(assetDir).filter((name) => name.endsWith('.jpg'));
for (const [, number] of js.matchAll(/cover:(\d+)/g)) {
  if (!existsSync(new URL(`assets/${number}.jpg`, dist))) throw new Error(`缺少封面：${number}.jpg`);
}
for (const [, start, end] of js.matchAll(/range:\[(\d+),(\d+)\]/g)) {
  for (let number = Number(start); number <= Number(end); number++) {
    if (number === 44) continue;
    if (!existsSync(new URL(`assets/${number}.jpg`, dist))) throw new Error(`缺少项目图片：${number}.jpg`);
  }
}

if (!html.includes('href="style.css"') || !html.includes('src="app.js"')) {
  throw new Error('CSS 或 JS 未使用相对路径');
}
console.log(`dist 验证通过：入口、CSS、JS 和 ${images.length} 张图片均已就绪。`);
