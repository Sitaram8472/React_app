import "./Props.css"

function Props({ title, price, animals, fruit }) {
  return (
    <div className="Props">
      <h3>{title},</h3>
      <h5>{price/2}</h5>
      <p>{animals}</p>
      <p>{fruit.a}</p>
    </div>
  );
}
export default Props;
