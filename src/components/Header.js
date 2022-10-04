import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <Link to="/">HOME</Link>
      </h1>
    </div>
  );
}
export default Header;
