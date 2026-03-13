import { useEffect } from "react";
import styles from "./Projetos.module.css";

function Projetos() {

  // alterar o titulo da pagina
  useEffect(() => {
    document.title = "Projetos Desenvolvidos";
  }, []);

  // cada projeto adicionado, ficará aqui, TENTO ADICIONAR A IMAGEM PORÉM O CODIGO QUEBRA
  const projects = [
    {
      id: 1,
      
      title: "Gerador de senha",
      
      image: "/image-projetos/print-Gerador-Senha.png", 
      
      description: ["Gerador de senhas desenvolvido em HTML, CSS e JavaScript, permitindo a criação de senhas seguras e personalizadas. A aplicação possibilita definir o comprimento da senha e selecionar os tipos de caracteres desejados, incluindo letras maiúsculas, minúsculas, números e símbolos. O projeto também conta com geração aleatória de senha, exibição automática no campo de resultado e funcionalidade de cópia para a área de transferência, facilitando o uso imediato da senha gerada."],
      
      techs:["HTML", "CSS", "JAVASCRIPT", "REACT"]
    },
    {
      id: 2,
      title: "Login Gestão Restaurante",
      
      image: "/image-projetos/print-Login-restaurante.png",

      description:["Interface de login desenvolvida para um projeto fictício de restaurante. A aplicação apresenta uma tela de autenticação simples e elegante, com layout centralizado, animação suave de entrada do formulário e identidade visual inspirada no tema gastronômico. O projeto também inclui navegação para páginas, como cardápio, sobre e política de privacidade, simulando a estrutura básica de um sistema web para restaurantes."],
      
      techs: ["html", "css"] 
    },
    {
      id: 3,
      
      title: "Projeto 3",
      
      // image: "/caminho-para-imagem2.jpg", 
      
      techs: ["html", "css", "js"] 
    },
  ];

  return (
    <section className={styles.SectionProjetos}>
      
      {/* titulo */}
      <div className={styles.H1_Projetos}>
      
        <h1 className={styles.H1Projetos}>Projetos Desenvolvidos</h1>
      
        <p className={styles.InformesGit}> Todos códigos usados estão no meu:

           {/* Link externo para o meu github */}
          <a className={styles.MeuGithub} href="https://github.com/Valfrides07" target="_blank" rel="noreferrer">
            Github
          </a>
        </p>
      </div>

      {/* Main dos cards de projetos */}
      <main className={styles.MainProjetos}>
        
        <ul className={styles.UlCards}>

          {projects.map((project) => (
        
            <li key={project.id} className={styles.liProjeto}>
              
              <div className={styles.cardInner}>
                
                {/* Frente do card*/}
                <div className={styles.cardFront}>

                  {/* Imagem do projeto (aparece somente se houver caminho) */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}

                      // evita quebrar layout caso a imagem não carregue
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  )}

                  <div className={styles.frontContent}>

                    {/* Titulos no cards */}
                    <h3 className={styles.cardTitleFront}>{project.title}</h3>
                
                    <div className={styles.cardTechs}>
                      
                      {/* Stacks */}
                      {project.techs.map(tech => (
                        <span key={tech} className={styles.techIcon}>{tech}</span>
                      ))}
                    </div>
                
                  </div>
                </div>

                {/* Verso do card (Informações) */}
               <div className={styles.cardBack}>

                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  {/* Botao que leva ao repositorio do projeto */}
                  <button className={styles.BtnGeradorSenha}><a href="https://github.com/Valfrides07/Gerador-de-Senha">Veja o código</a></button>
                </div>

              </div>
            </li>
          ))}

        </ul>

      </main>

    </section>
  );
}

export default Projetos;