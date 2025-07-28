import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Fragment from "./Fragment.jsx";
import PropsStore from "./PropsStore.jsx";
import ChildComponent from "./Arrayprops.jsx";
import ChildComponentprops from "./Objectprops.jsx";
import Greeting from "./conditional.jsx";

function Name() {
  return <p>my name is React</p>;
}

const userData = {
  name: "Alice",
  age: 30,
  city: "New York",
};
const dataArray = ["item1", "item2", "item3"];

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

      <div>
        <ChildComponent items={dataArray} />
      </div>

      <div>
        <ChildComponentprops user={userData} />
      </div>

      <div>
        <Greeting isLoggedIn={false}/>
      </div>

    </div>
  );
}

export default App;
