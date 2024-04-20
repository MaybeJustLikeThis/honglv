```
│  ├─public # 静态资源目录
│  │      favicon.ico
│  │
│  ├─src
│  │  │  App.vue # 入口vue文件
│  │  │  main.js # 入口文件
│  │  │  vite-env.d.ts # vite环境变量声明文件
│  │  │
│  │  ├─assets # 资源文件目录
│  │  │      logo.png
│  │  │
│  │  ├─lib # 公共组件文件目录
│  │  │      公共组件
│  │  │  
│  │  ├─style # 公共样式文件目录
│  │  │      公共样式.css
│  │  │  
│  │  └─components # 组件文件目录
│  │  │	      │
│  │  │     Home # 组件每个网页的目录
│  │  │	      │
│  │  │       └─Home_Header.vue # 组件名   
│  │  │  
│  │  └─router # 路由文件目录 
│  │  │		index.js
│  │  │
│  │  └─store # 数据格式文件目录
│  │  │		
│  │  │
│  │  └─view # 页面文件目录
│  │    │
│  │    └─Home.vue # 首页	
│  │ .gitignore
│  │ index.html # Vite项目的入口文件
│  │ package.json
│  │ README.md
│  │ vite.config.js # vite配置文件
```

本项目是一个基于 Vite3 搭建的 Vue3 项目模板，集成了JavaScript、Vue Router、Axios、ESLint

运行环境： VSCode、**Node16+**、 VSCode 插件：Vue Language Features (Volar)、Prettier - Code formatter
node版本：18.12.1
vue：3.3.4
vite:4.5.1
element-plus: ^2.7.0

