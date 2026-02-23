# 状态和事件

---

## 事件处理函数

衔接着上一步的代码，我们需要修改 main.js 中的App函数。加入一个事件处理函数 handleChange(event)，并将与 input 元素进行绑定。

```js
{/* 函数体 */}
function handleChange(event) {
    console.log("Changeing");
}
...
{/* 文本框元素绑定事件 */}
<input type="text" onChange={handleChange}></input>
...
```

或许我们可以输出输入的文本， event.target.value 可以获取输入的值，在浏览器的控制台可以查看输出的值。

```js
function handleChange(event) {
  const changedText = event.target.value;
  console.log(changedText);
}
```

---

## 文本呈现于页面

刚刚我们成功的打印了输入的元素至控制台，现在我们需要将打印的文本添加至页面中
首先我们需要通过一个字符变量 inputText ，与我们 handleChange 函数中的 changedText 进行绑定

```js
let inputText = "";
function handleChange(event) {
  const changedText = event.target.value;
  inputText = changedText;
  ...
}
```

绑定成功后，接着我们将对原有的p标签元素进行修改，而这里需要用到 React 中的函数 useState

```js
function MyButton() {
  const [count, setCount] = useState(0);
  ...
```

通过定义的 stage 状态变量，我们可以获取到更新变化的值，在这个例子中可以获取到按钮按下的次数，并做出反应

```js
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
```

让我们回到刚刚的文本框中来看，我们并不需要像上面按钮一样去获取次数，而是需要同步内容，让我们修改逻辑

```js
const [inputText, setInputText] = React.useState("");
function handleChange(event) {
  const changedText = event.target.value;
  setInputText(changedText);
  console.log(`inputText: ${inputText}`);
}
...
return (
    <>
      ...
      <p>{inputText}</p>
    </>
  );
```

## 帮助文档

- https://react.dev/learn#responding-to-events
- https://react.dev/learn#updating-the-screen
- https://react.dev/learn#displaying-data
