import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main>
      <div>
        <footer className={styles.Footer}>
          <p>
            {/* link que redireciona para uma aba de Direitos autorais */}
            <Link className={styles.SpanDireitos} to="/Direitos">
              © 2026 Todos os direitos reservados.
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
