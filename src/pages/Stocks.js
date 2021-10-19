// Route for this is "/stocks/symbol"
// Refer back to Price.js in Crypto Lecture
import React from "react";
import stockData from "../data.json";

const Stocks = (props) => {
  const stockMatch = stockData.filter(stock => stock.symbol === props.match.params.symbol)[0];
  
  return (
    <div>
      <h2>
        Name: {stockMatch.name}
      </h2>
      <h2>  
        Price: {stockMatch.lastPrice}
      </h2>
    </div>
    )
};

// Ref code
// const Stock = props => {
//   const stock = props.stockData.filter( d => d.symbol === props.match.params.symbol)[0]
export default Stocks;