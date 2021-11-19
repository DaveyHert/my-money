import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm() {
  // states
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(amount);

    setName("");
    setAmount("");
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button className='btn'>Add</button>
      </form>
    </>
  );
}
