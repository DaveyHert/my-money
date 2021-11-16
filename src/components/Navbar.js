import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.title}>
          <Link to='/'>My Money</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signp</Link>
        </li>
      </ul>
    </nav>
  );
}
