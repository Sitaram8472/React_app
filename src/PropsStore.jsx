import Props from "./Props.jsx";

// array
const arr = ["cat", "Dog", "elephant"];

// object
const obj = {
  a: "mango",
  b: "banana",
  c: "ornage",
};

function PropsStore() {
  return (
    <div>
      <Props title="Phone" price={32000} animals={arr} fruit={obj} />
      <Props title="Laptop" price={35000} animals={arr} fruit={obj} />
      <Props title="Watch" price="15000" animals={arr} fruit={obj} />
    </div>
  );
}
export default PropsStore;
