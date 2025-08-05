import Price from "./cardprice";
import "./Card1.css";

export default function CardPart1({ title, idx }) {
  let oldprice = ["2055", "1452", " 7895", "7487"];
  let newprice = ["20550", "14052", " 78095", "74807"];
  let Description = [
    ["8000 DPI", "five progamble"],
    [" APPLE STORE", "sixtheen edition"],
    ["svmsung store near 1km", "svmsumg is good store"],
    ["laptop stire aay 5km", "laptop is most used"],
  ];
  return (
    <div className="Card1">
      <h4>{title}</h4>
      <p className="Description">{Description[idx][0]}</p>
      <p className="Description">{Description[idx][1]}</p>
      <div className="Price">
        <Price oldprice={oldprice[idx]} newprice={newprice[idx]} />
      </div>
    </div>
  );
}
