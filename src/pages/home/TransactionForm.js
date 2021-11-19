import { useState } from "react";

export default function TransactionForm() {
  // states
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  // handle submission
  const handleClick = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(amount);

    setName("");
    setAmount("");
  };

  return (
    <form>
      <label>
        <span>Name:</span>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Amount:</span>
        <input
          type='text'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <button className='btn' onClick={handleClick}>
        Add
      </button>
    </form>
  );
}
