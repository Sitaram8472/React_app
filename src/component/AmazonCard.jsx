import "./AmazonCard.css";
import CardPart1 from "./CardPart1";

export default function AmazonCard() {
  return (
    <div className="Card">
      <CardPart1 title = "logistic master card" idx="0"/>
      <CardPart1 title = "Apple pencil (2 gen)" idx="1"/>
      <CardPart1 title = "Zebrasonic zeb-tranformer" idx="2"/>
      <CardPart1 title = "petrosonic toad 23" idx="3"/>
    </div>
  );
}
