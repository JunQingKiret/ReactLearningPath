# VScode 下的 React

---

## 创建 HTML 文件

打开 VSCode ，创建一个名为 .html 的文件index.html
通过 cdn 在 \<head> 中去导入 React, ReactDOM

```js
<!-- React and ReactDOM from CDN -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

同上导入 Bable

```js
<!-- Babel (to use JSX in the browser) -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

在\<body>中导入 main.js 文件，并在 \<body> 中添加一个可溯源的root元素

```html
<body>
  <div id="root"></div>
  <script type="text/babel" src="./main.js"></script>
</body>
```

---

## React代码

创建一个后缀名为.js的文件 main.js ，并在从中去编写 React 代码

我们首先将 html 文件中的 root 元素与 root 节点进行绑定

```js
<!-- React -->
const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
```

可把这段代码分为三段来进行理解

```js
<!-- 通过getElementById查找id为root的元素 -->
const rootElement = document.getElementById("root");
<!-- 创建一个root节点 -->
const root = ReactDOM.createRoot(rootElement);
<!-- render函数渲染App组件 -->
root.render(<App />);
```

在编写一个函数，返回值为 html 元素是 React 的特殊写法

```js
function App() {
  return <h1>hello from react</h1>;
```

而返回的根元素只能有一个，所以这里可用 React 的语法<></>来包含更多的 html 元素

```js
function App() {
  return (
    <>
      <h1>hello from react</h1>
      <input type="text"></input>
      <p></p>
    </>
  );
}
```

---

## 帮助文档
