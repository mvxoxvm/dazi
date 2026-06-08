# 部署到 GitHub Pages

当前项目是纯静态页面，可以部署到 GitHub Pages。

## 使用 GitHub CLI

先安装并登录：

```bash
gh auth login
```

然后在本目录运行：

```bash
git init
git add .
git commit -m "Create Chinese typing practice app"
git branch -M main
gh repo create chinese-typing-practice --public --source=. --remote=origin --push
gh api -X POST repos/:owner/chinese-typing-practice/pages -f source.branch=main -f source.path=/
```

如果仓库已经存在：

```bash
git remote add origin https://github.com/<你的用户名>/chinese-typing-practice.git
git push -u origin main
```

然后到仓库 `Settings -> Pages`，选择 `Deploy from a branch`，分支选 `main`，目录选 `/root`。

## 使用网页上传

1. 在 GitHub 新建仓库 `chinese-typing-practice`。
2. 上传本目录中的所有文件和 `assets` 文件夹。
3. 进入 `Settings -> Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 等待 GitHub 生成 Pages 地址。
