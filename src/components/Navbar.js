import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <nav className={style.navbar}>
      <ul>
        <li className={style.title}>
          <Link to='/'>My Money</Link>
        </li>

        {!user && (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>Hello {user.displayName}</li>
            <button className='btn' onClick={logout}>
              Logout
            </button>
          </>
        )}
      </ul>
    </nav>
  );
}
