# React 2-2 Vite and React

---

## npm 配置镜像

```
# 配置国内镜像
npm config set registry https://registry.npmmirror.com/
# 检查当前镜像 应输出 https://registry.npmmirror.com/
npm config get registry
```

## 创建 vite 项目

```
# 输入命令
F:\work\ReactLearningPath\section\section2-1>npm create vite

Ok to proceed? (y) y

> npx
> create-vite

│
◇  Project name:
│  vite-project
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Use Vite 8 beta (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  No
└


```

## 运行 Vite 项目

打开项目

```
cd vite-project
# 安装依赖
npm install // npm -i
# 启动项目
npm run dev
```

## 更多的包管理器

- Yarn
- pnpm 首选
- Bun
- Deno

## pnpm

```
# 全局安装
npm install -g pnpm@latest-10

pnpm i
```
