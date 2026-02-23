# 表单

## 登录页面

我们可以在 main.js 去构建一个含有账号 username 和密码 password 的输入框和 Login 登录按钮的简单表单

首先当然是构建一个主体框架，使用 \<main> 来做一个框架，在将文本内容放到里面

```js
return (
  <main>
    <h2>Login Form</h2>
    <input
      type="text"
      onChange={...}
    ></input>
    <input
      type="password"
      onChange={...}
    ></input>
    <button type="submit">Login</button>
  </main>
);
```

对于有着两种以及多种需要事件处理函数进行绑定的元素，这时候我们可以通过匿名函数来实现功能的编写

```js
...
  <input
    type="text"
    onChange={(event) => setUsername(event.target.value)}
    ></input>
  <input
    type="text"
    onChange={(event) => setPassword(event.target.value)}
    ></input>
...
```

而对于这些元素（文本框，按钮）框架，我们需要用 \<form> 来构造一个框架来区别于包含这些元素

```js
<main>
  <h2>Login Form</h2>
  <form>
    <input></input>
    <input></input>
    <button></button>
    ...
  </form>
</main>
```

我们还需要继续对这个登录页面进行完善,添加登录逻辑,编写一个函数 handleSubmit 来完成 Submit

```js
function handleSubmit(event) {
  event.preventDefault();
  alert(`username:${username} Password:${password}`);
  setUsername("");
  setPassword("");
}
```

当然,不要忘记绑定事件,在 \<form> 中绑定 handleSubmit

```js
<form onSubmit={handleSubmit}>...</form>
```

### 双向绑定

在输入完账号密码的时候点击提交,在 handleSubmit 中的两个置空语句并没有起到作用,这是为什么呢

```js
function handleSubmit(event) {
  setUsername("");
  setPassword("");
}
...
<input
    type="text"
    onChange={(event) => setUsername(event.target.value)}
    ></input>
<input
    type="password"
    onChange={(event) => setPassword(event.target.value)}
    ></input>
...
```

这是因为在两个元素中, onChange 中仅是单向的绑定关系.当事件发生,同步 state 状态变量之中.而 state 状态变量并没有主动的进行同步
那么我们就需要手动的添加语句,对值进行与stage变量进行绑定

```js
<input
    type="text"
    value={username}
    onChange={(event) => setUsername(event.target.value)}
    ></input>
<input
    type="password"
    value={password}
    onChange={(event) => setPassword(event.target.value)}
    ></input>
```

## 样式

在制作完成一个简单的表单之后,我们需要对表单的样式进行修改,使其更加的美观

## 帮助文档
