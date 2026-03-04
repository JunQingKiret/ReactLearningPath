# React 1-5 列表&条件渲染

---

## 列表渲染

我们需要在 main.js 中处理这一段数据，一个数组包含着 name , conuntry , forecast 三种数据，
对这些数据进行处理并显示在我们的页面当中

```jsx
const cities = [
  {
    name: "New York",
    country: "USA",
    forecast: [
      { date: "2024-04-03", temperature: 15, weather: "Partly cloudy" },
      { date: "2024-04-04", temperature: 17, weather: "Sunny" },
      { date: "2024-04-05", temperature: 18, weather: "Partly cloudy" },
      { date: "2024-04-06", temperature: 20, weather: "Rain" },
      { date: "2024-04-07", temperature: 16, weather: "Thunderstorms" },
      { date: "2024-04-08", temperature: 14, weather: "Cloudy" },
      { date: "2024-04-09", temperature: 13, weather: "Partly cloudy" },
    ],
  },
  {
    name: "London",
    country: "UK",
    forecast: [
      { date: "2024-04-03", temperature: 12, weather: "Cloudy" },
      { date: "2024-04-04", temperature: 14, weather: "Rain" },
      { date: "2024-04-05", temperature: 15, weather: "Partly cloudy" },
      { date: "2024-04-06", temperature: 13, weather: "Sunny" },
      { date: "2024-04-07", temperature: 11, weather: "Cloudy" },
      { date: "2024-04-08", temperature: 10, weather: "Rain" },
      { date: "2024-04-09", temperature: 12, weather: "Partly cloudy" },
    ],
  },
  {
    name: "Tokyo",
    country: "Japan",
    forecast: [
      { date: "2024-04-03", temperature: 20, weather: "Sunny" },
      { date: "2024-04-04", temperature: 21, weather: "Partly cloudy" },
      { date: "2024-04-05", temperature: 22, weather: "Cloudy" },
      { date: "2024-04-06", temperature: 19, weather: "Rain" },
      { date: "2024-04-07", temperature: 18, weather: "Partly cloudy" },
      { date: "2024-04-08", temperature: 17, weather: "Sunny" },
      { date: "2024-04-09", temperature: 20, weather: "Cloudy" },
    ],
  },

  {
    name: "Sydney",
    country: "Australia",
    forecast: [],
  },

  {
    name: "Beijing",
    country: "China",
  },
];
```

不然发现，我们在原有的 main.js 上的 JavaScript 代码显得比较冗余，多次调用重复的方法。为了降低代码量，我们可以将这段逻辑写成一个格式，也就是列表渲染。
创建一个 renderForecastList(forecastlist) 函数来收集数据

```jsx
return forecastlist.map((forecast) => (
      <ul>
        <li>
          {forecast.date}{" "}
          <span>
            temperature: {forecast.temperature}℃({forecast.weather})
          </span>
        </li>
      </ul>
    ));
  }
```

利用相同的列表渲染来在 \<main> 中展示数据

---

## 条件渲染

回到 cities 数据中去，可以看到有部分城市是不存在 forecast 属性或者 forecast属性，对于这种情况，我们可以利用三目表达式，来对出现的两种情况进行对应的处理方法

```jsx
return (
  <main>
    {cities.map((city) => (
      <section className="city">
        <h2>{city.country}</h2>
        <h3>{city.name}</h3>
        {city.forecast && city.forecast.length > 0
          ? renderForecastList(city.forecast)
          : "No forecast"}
      </section>
    ))}
    {/* <section className="city">
        <h2>UK</h2>
        <h3>London</h3>

        <ul>
          <li>
            {new Date().toLocaleDateString()}
            <span> temperature: 20℃(Sunny)</span>
          </li>
          <li>
            {new Date().toLocaleDateString()}
            <span> temperature: 19℃(Cloudy)</span>
          </li>
          <li>
            {new Date().toLocaleDateString()}
            <span> temperature: 12℃(Rain)</span>
          </li>
        </ul>
      </section>
      <section className="city">
        <h2>CN</h2>
        <h3>Beijing</h3>

        <p>Can't find any data</p>
      </section> */}
  </main>
);
```
