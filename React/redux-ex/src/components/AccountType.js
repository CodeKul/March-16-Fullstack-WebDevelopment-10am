import React from "react";
import { useSelector } from "react-redux";

function AccountType() {
  const accType = useSelector((state) => state.banking);
  console.log(accType);
  return (
    <div>
      <h2 className="acct-type">
        {accType.isSavings ? "Savings Account" : "Current Account"}
      </h2>
    </div>
  );
}

export default AccountType;
