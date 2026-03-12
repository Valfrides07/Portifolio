import styles from "./direito.module.css";
import { useEffect } from "react";

export default function Direitos() {

  useEffect(()=>{
    document.title= 'Direitos Autorais'
  },[]);

  return (
    <section>
      <title>Direitos autorais</title>

      <div className={styles.divDireitos}>
        <h1 className={styles.H1Direitos}>Direitos Autorais</h1>

        <p className={styles.Paragrafo}>
          Este portfólio reúne projetos, códigos, textos e elementos visuais
          desenvolvidos para fins profissionais e demonstrativos. Todo o conteúdo apresentado é
          protegido pela legislação brasileira de direitos autorais.
        </p>

        <h2 className={styles.Subtitulo}>Propriedade Intelectual</h2>

        <p className={styles.Paragrafo}>
          Salvo indicação em contrário, são de minha autoria:
        </p>

        <ul className={styles.Lista}>
          
          <li>Textos, descrições e documentações;</li>
          
          <li>Layouts, interfaces e identidade visual;</li>
          
          <li>
            Códigos-fonte e projetos desenvolvidos em quaisquer linguagens de programção, frameworks e tudo aquilo que seja relacionado. 
          </li>
          
          <li>
            Estrutura, organização e concepção técnica das aplicações
            apresentadas.
          </li>
          
          <li>Este site possui finalidade exclusivamente profissional e demonstrativa.</li>
        </ul>

        <p className={styles.Paragrafo}>
          Alguns projetos podem utilizar bibliotecas e frameworks de código
          aberto, respeitando suas respectivas licenças.
        </p>

        <h2 className={styles.Subtitulo}>Uso do Conteúdo</h2>

        <ul className={styles.Lista}>
          <li>É permitida a visualização para fins pessoais e avaliativos;</li>
          <li>
            Não é permitida a reprodução, modificação ou uso comercial sem
            autorização prévia;
          </li>
          <li>
            Links para este portfólio são permitidos, desde que não impliquem
            associação indevida.
          </li>
        </ul>

        <p className={styles.ParagrafoFooter}>
          © 2026 Valfrides Fernandes de Freitas. <span className={styles.Alert}>Todos os direitos reservados.
          Regido pela Lei nº 9.610/1998 (Lei de Direitos Autorais e Conexos).</span>
        </p>
      </div>
    </section>
  );
}
