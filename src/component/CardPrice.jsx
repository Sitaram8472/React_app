export default function Price({oldprice, newprice}){
  let oldpricestyle = {
    textDecorationLine:"line-through",
  }
  let newpricestyle = {
    fontWeigth:"bold",
  }
  return(
    <div className="price">
      <span style={oldpricestyle}>{oldprice}</span>
      &nbsp;&nbsp;
      <span style={newpricestyle}>{newprice}</span>
    </div>
  );
}