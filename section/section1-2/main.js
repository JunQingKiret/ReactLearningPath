function App() {
  const [inputText, setInputText] = React.useState("");
  function handleChange(event) {
    const changedText = event.target.value;
    setInputText(changedText);
    console.log(`inputText: ${inputText}`);
  }
  return (
    <>
      <h1>Hello from react</h1>
      <input type="text" onChange={handleChange}></input>
      <p>{inputText}</p>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
