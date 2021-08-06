import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  // const {
  //   banking: { balance },
  // } = useSelector((state) => state);

  const bank = useSelector((state) => state.banking);
  console.log(bank);
  //console.log(balanceAmount);
  return (
    <div>
      <h2>{bank.balance}</h2>
      
    </div>
  );
}

export default Balance;
