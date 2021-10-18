// Route for this is "/stocks/symbol"
// Refer back to Price.js in Crypto Lecture
import React from "react";
import stocks from "../data.json"

const Stocks = (props) => {
  const stock = props.stocks.filter(stocks => stocks.symbol === props.match.params.symbol)[0]
  
  return (
    <div>
      <h2>
        Name: {stock.name}
      </h2>
      </div>
    )
};

// Ref code
// const Stock = props => {
//   const stock = props.stockData.filter( d => d.symbol === props.match.params.symbol)[0]
export default Stocks;