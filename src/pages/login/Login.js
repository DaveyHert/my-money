import style from "./Login.module.css";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className={style["login-form"]} onSubmit={handleSubmit}>
      <h1>Log In Page</h1>

      <label>
        <span>email:</span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isLoading && <button className='btn'>Login</button>}
      {isLoading && (
        <button className='btn' disabled>
          Loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
