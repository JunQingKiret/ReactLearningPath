# 列表&条件补充

---

## 条件渲染语法

对于条件渲染中出现的三元运算符，显然对于展示近期天气的数据这种逻辑是适用的，存在调用 renderForecastList(city.forecast)
不存在返回 No forecast

```jsx
city.forecast && city.forecast.length > 0
  ? renderForecastList(city.forecast)
  : "No forecast";
```

当遇到不需要 else 分支情况的时候，我们可以单独使用下面的语法，当条件符合运行 renderForecastList(city.forecast)

```jsx
<div>{isLoggedIn && <AdminPanel />}</div>

<div>{city.forecast && city.forecast.length > 0 && <renderForecastList(city.forecast) />}</div>
```

当然，为了代码复用性，我们把判断逻辑整合到一个函数中

```jsx
function isForecastExists(forecastList) {
  return forecastList && forecastList.length > 0;
}
...
<section className="city">
  <h2>{city.country}</h2>
  <h3>{city.name}</h3>
  {isForecastExists(city.forecast) && <span>"No forecast"</span>}
</section>;
...
```

## key列表

对于 \<li> 列表来说，每个项需要加上 key 属性

```jsx
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
```

**Why?**

在我们的列表渲染中，没有添加 key 属性的话，React会默认把列表的索引 index 作为 key 属性
一但出现对表单的增删改减，就会改变文件的索引。比如删除了第一个文件，第二个文件就会变成第一个文件
