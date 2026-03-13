import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p>
        <Link className={styles.SpanDireitos} to="/DireitosAutorais">
          © 2026 Todos os direitos reservados.
        </Link>
      </p>
    </footer>
  );
}