import { useEffect } from "react";
import styles from "./SobreMim.module.css";

import MeuCurriculo from "/CV/Curriculo estágio atualizado .pdf";

// alterar o titulo da pagina
function SobreMim() {
  useEffect(() => {
    document.title = "Sobre Mim";
  }, []);

  return (
    <section className={styles.SectionSobreMim}>
      
      <div className={styles.DivSobremim}>
        <h1>Conheça um pouco sobre mim</h1>
      </div>

      {/* Div sobre mim, experiencias, trajetoria */}
      <div className={styles.P_SobreMim}>
        <p>
          Morador de Praia Grande - SP, estudante de Sistemas de Informação pela
          Universidade Santa Cecília - Santos(SP). Desenvolvedor Front-end com
          foco em JavaScript, React e Next.js, construindo interfaces modernas,
          responsivas e orientadas à experiência do usuário. Possuo base em
          backend com Python e C#, além de conhecimentos em bancos de dados
          relacionais. Sempre aprimorando o meu aprendizado, busco um
          aprendizado constante em arquitetura de aplicações e integração entre
          front-end e APIs. Busco oportunidade de estágio ou posição júnior em
          desenvolvimento Front-end, contribuindo com organização,
          desenvolvimentos em projetos, desejo de aprendizado e visão de
          crescimento técnico.
        </p>
        <br />
        
        {/* Breve experiencias profissionais */}
        <h2 className={styles.H2Subtitulo}>Tenho como experiências:</h2>
        
        <p className={styles.Profissao}>
          <strong>
            Estagiário em Tecnologia da Informação - Prefeitura de
            Cubatão(2025):
          </strong>
        </p>
        
        <ul>
          <li>micros, softwares e comunicação de dados </li>

          <li>Instalação e Manutenção de redes e Hardwares </li>

          <li>Uso de sistemas de gestão</li>

          <li>Acompanhamento de testes e programas </li>

          <li>Manipulação de dados </li>

        </ul>
        
        <p className={styles.Profissao}>
          <strong>Auxiliar de Logística - Loja do Mecânico(2022):</strong>
        </p>
        
        <ul>
          <li>Conferência e separação de pedidos</li>

          <li>Organização de estoque e etiquetagem</li>

          <li>Roteirização e apoio na expedição</li>

          <li>Comunicação com fornecedores e equipe interna</li>

          <li>Cumprimento de prazos e processos de segurança</li>

          <li>Melhoria contínua em processos logísticos</li>
        </ul>
        
        <div>
          <p className={styles.Profissao}>
            <strong>Exército Brasileiro(2021-2022):</strong>
          </p>
        </div>
        
        <ul>
          <li>Organização, Disciplina e responsabilidade</li>

          <li>Trabalho em equipe e liderança</li>

          <li>Gestão do tempo e cumprimento de prazos</li>

          <li>Comunicação clara e hierárquica</li>

          <li>Tomada de decisão sob pressão,Organização</li>

          <li>logística e planejamento</li>

          <li>Manutenção básica e atenção a procedimentos de segurança</li>

          <li>Resiliência e adaptação a ambientes desafiadores</li>
        </ul>
        
        {/* Botao com download de curriculo em pdf */}
        <div>
          <a
            href={MeuCurriculo}
            download="Currículo-Valfrides-Fernandes-Front-End.pdf">

            <button className={styles.BtnCurriculo} type="button">
              Baixar Currículo
            </button>
          </a>
        </div>
      
      </div>
    </section>
  );
}

export default SobreMim;
