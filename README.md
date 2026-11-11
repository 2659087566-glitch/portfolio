# 曹思微个人作品集 · GitHub Pages 版本

这个目录是可放到你自己 GitHub 仓库的独立网站项目，不依赖 `git.chatgpt-team.site`。`dist` 包含完整静态网站，`.github/workflows/pages.yml` 在推送 `main` 后自动发布。

## 发布到你自己的仓库

1. 在你的 GitHub 账号下新建一个空仓库。建议设为 Public，仓库名可用 `siwei-portfolio`。
2. 把**本目录中的文件和文件夹**上传到仓库根目录，包括隐藏的 `.github` 文件夹。可用 GitHub 网页的 **Add file → Upload files** 上传，无需在电脑上输入 Git 凭据。
3. 打开仓库的 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
4. 在 **Actions** 中查看 `Deploy portfolio to GitHub Pages`。部署成功后，Pages 设置页会显示你的公开网址。

如果你把自己仓库的 URL 发给我，我可以将本地 Git 远程地址指向它，并协助完成后续步骤。仓库地址不要包含密码或访问令牌。

## 修改内容

- `dist/index.html`：页面文字与结构
- `dist/style.css`：样式与动效
- `dist/app.js`：项目内容及交互
- `dist/assets`：76 张优化后的作品图片

网站使用相对路径，可部署在 GitHub Pages 的仓库子路径下。图片素材版权仍归原作者及对应品牌所有。
