import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  return (
    <div className={styles.container}>
      <div className='content'>
        {documents && <TransactionList transactions={documents} />}
        {error && <p>{error}</p>}
        {documents.length === 0 && <p>Your transactions list is empty</p>}
      </div>

      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
