import style from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import TransactionForm from "./TransactionForm";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={style.container}>
      <div className='content'>Transaction List</div>

      <div className={style.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
