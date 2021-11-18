// import style from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div>
      <h1>Home Page </h1>

      {user ? (
        <p>Welcome back {user.displayName}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
