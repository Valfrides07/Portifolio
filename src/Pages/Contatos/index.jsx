import styles from "./Contatos.module.css";
import { useEffect } from "react";

import { Mail } from "lucide-react";
import { MessageCircle } from "lucide-react";

// alterar o titulo da pagina
function Contatos() {
  useEffect(() => {
    document.title = "Entre em contato";
  }, []);

  return (
    <main className={styles.MainContatos}>
      <section className={styles.Section}>
      
        {/* Titulo e subtitulo */}
        <div className={styles.divContato}>
          <h1>Entre em contato</h1>

          <p className={styles.Psubtitulo}>
            Aqui você será redirecionado aos meios de contato que preferir.
          </p>
        </div>

        {/*Encaminha para o Gmail e WhatsApp com links*/}
        <div className={styles.DivEmail}>
          <a
            className={styles.Email}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=valfridesfreitas29@gmail.com"

            // Não abra este link na aba atual; abra em uma nova aba
            target="_blank"

            // O noopener corta brechas para ataques de Tabnabbing, mudar a URL da sua aba original para uma página de phishing.

            // Ele impede que o navegador envie o endereço do seu site (o "Referrer") para o site de destino.
            rel="noopener noreferrer">

            <Mail /> <span title="Ir para o Gmail">Gmail: valfridesfreitas29@gmail.com 
            </span>
          </a>
        </div>

        <div className={styles.DivWhatsapp}>
          <a className={styles.Whatsapp} 
            href="https://wa.me/5513997752492" 
            target="_blank"
            rel="noopener noreferrer"
            title="Ir para o WhatasApp">

            <MessageCircle /> WhatsApp: (13) 99775-2492 
      
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contatos;
