import React, { useState } from "react";
import "./Bank.css";
import { useDispatch } from "react-redux";
function BankOperations() {
  const [amt, setAmt] = useState("");
  const dispatch = useDispatch();
  const getAmount = (e) => {
    setAmt(e.target.value);
  };
  return (
    <div className="container">
      <form>
        <div>
          <input
            type="text"
            className="input-balance"
            value={amt}
            onChange={getAmount}
          />
        </div>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch({ type: "deposit", payload: Number(amt) })}
        >
          Deposit
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch({ type: "withdraw", payload: Number(amt) })}
        >
          Withdraw
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch({ type: "interest" })}
        >
          Interest
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch({ type: "delete-acct" })}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => dispatch({ type: "change-acct" })}
        >
          Change Account Type
        </button>
      </form>
    </div>
  );
}

export default BankOperations;
