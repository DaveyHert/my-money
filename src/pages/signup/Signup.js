import style from "./Signup.module.css";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username);
    console.log(email);
    console.log(password);
  };

  return (
    <form className={style["signup-form"]} onSubmit={handleSubmit}>
      <h1>Sign Up Page</h1>

      <label>
        <span>usename:</span>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        <span>email</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>password</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className='btn'>Signup</button>
    </form>
  );
}
