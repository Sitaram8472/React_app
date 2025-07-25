import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Fragment from "./Fragment.jsx";
import PropsStore from "./PropsStore.jsx";

function Name() {
  return <p>my name is React</p>;
}

function App() {
  return (
    <div id="main">
      <div>
        <Title />
        <p>Hello guys</p>
        <Name />
        <h1>Hello</h1>
      </div>

      <div>
        <Fragment />
      </div>

      <div>
        <ProductTab />
      </div>

      <div>
        <PropsStore />
      </div>
      
    </div>
  );
}

export default App;
