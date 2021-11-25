// styles
import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions");
  return (
    <ul className={styles.transactions}>
      {transactions.map((doc) => (
        <li key={doc.id}>
          <p className={styles.name}>{doc.name}</p>
          <p className={styles.amount}>${doc.amount}</p>
          <span
            className={styles.delete}
            onClick={() => deleteDocument(doc.id)}
          >
            x
          </span>
        </li>
      ))}
    </ul>
  );
}
