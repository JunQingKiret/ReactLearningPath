# 动态校验

## 类选择器

在上一次我们给表单添加了样式并把样式整合到单独的 style.css
这一次我们继续完善表单，给用户添加约束：用户在输入框下输入的长度是否符合要求
当然，我们可以根据 react 的语法，在 \<input> 中直接添加 className ，在里面编写逻辑

```jsx
<input
  ...
  className={username.length <= 2 && username.length > 0 ? "input-error" : ""}
  ...
></input>
```

这样确实可以对单独的 \<input> 起到作用，但是把逻辑重复的内容放在下一段的 \<input> 时候，这样写就显得冗余了

### 函数复用 错误案例

按照正常的逻辑，我们这个时候我们应去编写一个函数来提高代码的复用性

```jsx
function computedUsernameClass{
    return username.length <= 2 && username.length > 0 ? "input-error" : "";
  }
```

在 \<input> 的类选择器 className 进行一个调用

```jsx
className={()=> computedUsernameClass()}
```

### derived state

但是在 react 中上面这种是不可行的，那么就需要用到 react 中的 derived state 语法。新建一个普通的变量进行返回逻辑

```jsx
const usernameClass =
  username.length <= 2 && username.length > 0 ? "input-error" : "";
const passwordClass =
  password.length <= 2 && password.length > 0 ? "input-error" : "";
```

把这个变量看作普通的 state 变量，这时候导入到 className
，通过这个变量可以正确的返回字符串

```jsx
...
className = { usernameClass }
...
className = { passwordClass }
...
```

---

## 校验

在开始的 handleSubmit 提交函数中添加账密检测的逻辑，如果账号密码不正确将提前返回来保留先前输入的值

```jsx
function handleSubmit(event) {
  event.preventDefault();
  if (usernameClass.length > 0 || passwordClass.length > 0) {
    alert("Invalid username or password");
    return;
  }
  alert(`username:${username} Password:${password}`);
  setUsername("");
  setPassword("");
}
```
