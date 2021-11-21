import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  // states
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [notValid, setNotValid] = useState(null);

  const { addDocument, deleteDocument, response } =
    useFirestore("transactions");
  // handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addDocument({ name, amount, uid });
    } else {
      setNotValid("Invalid input");
    }

    setTimeout(() => setNotValid(null), 1000);
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
      console.log(response);
      console.log(response.success);
    }
  }, [response.success]);

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
        {notValid && <p>{notValid}</p>}
      </form>
    </>
  );
}
