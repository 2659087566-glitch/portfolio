# 曹思微个人作品集 · GitHub Pages 版本

这是 [2659087566-glitch/portfolio](https://github.com/2659087566-glitch/portfolio) 的网站源文件，不依赖 `git.chatgpt-team.site`。`dist` 包含完整静态网站，`.github/workflows/pages.yml` 在推送 `main` 后自动发布。

## 启用 GitHub Pages

网站文件已上传至仓库。`dist/index.html` 是完整作品集入口。仓库根目录的 `index.html` 会在 GitHub Pages 使用 `main` 分支发布时跳转到它，避免打开 README。

1. 打开 [仓库 Pages 设置](https://github.com/2659087566-glitch/portfolio/settings/pages)。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
3. 选择后，向 `main` 推送一次修改，或在 [Actions](https://github.com/2659087566-glitch/portfolio/actions) 手动运行 `Deploy portfolio to GitHub Pages`。
4. 公开网址是 <https://2659087566-glitch.github.io/portfolio/>。

当前另有一个已公开的在线版本：<https://siwei-cao-portfolio-2026.dreamycreek24.chatgpt.site>。

## 修改内容

- `dist/index.html`：页面文字与结构
- `dist/style.css`：样式与动效
- `dist/app.js`：项目内容及交互
- `dist/assets`：76 张优化后的作品图片

网站使用相对路径，可部署在 GitHub Pages 的仓库子路径下。图片素材版权仍归原作者及对应品牌所有。

本项目没有额外构建步骤；`dist` 就是可发布文件。工作流会运行 `scripts/verify-build.mjs` 检查入口、资源文件和项目图片，再上传 `dist`。
