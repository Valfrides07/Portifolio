// Header
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
    {/* Logotipo */}
      <img
        className={styles.Logo}
        src="/image/Logotipo_portifolio.png"
        alt="Logo"
      />

      {/* redireciona para paginas */}
      <nav className={styles.Nav_header}>
        <Link className={styles.HomeBtn} to="/">
          Home
        </Link>

        <Link className={styles.ProjetosBtn} to="/Projetos">
          Projetos
        </Link>

        <Link className={styles.ContatosBtn} to="/Contato">
          Contato
        </Link>

        <Link className={styles.BtnSobreMim} to="/Sobre">
          Sobre Mim
        </Link>
      </nav>
    </header>
  );
}

export default Header;
