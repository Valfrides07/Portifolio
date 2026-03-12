// Index da pasta Hero
import styles from "./Hero.module.css";
import { useEffect } from "react"; 

import { AiOutlinePython } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";

export default function Hero() {

  // // alterar o titulo da pagina
  useEffect(() => {
    document.title = "Pagina Inicial";

  }, []);

  return (
    <>

      {/* Atribuindo o styles e o css ao hero */}

      <section className={styles.hero}>
        <div className={styles.Div_Imagem}></div>

        <div className={styles.HeroText}>

          <div className={styles.SobreMim}>
            <h1 className={styles.NameMy}>

              <span className={styles.SpanH1}> Olá, me chamo </span>
              <br /> Valfrides Fernandes de Freitas
            </h1>

            {/* Breve resumo sobre mim => aba Sobre mim */}
            <div className={styles.PBreve_Resumo}>
              <p className={styles.Paragrafo_Conteudo}>
                Desenvolvedor Front-end
              </p>
            </div>
          </div>

          {/* Div com Cards das Stacks */}
          <div className={styles.Card}>

            <h2 className={styles.h2Tecnologias}>
              Tecnologias aplicadas em projetos e estudos práticos
            </h2>

            {/* cards com nomes e Icons de cada Stack com um breve resumo*/}
            <ul className={styles.iconList}>

              <li className={styles.IconPython} title="Python">
                <span className={styles.SpanPy}>Python</span>
                <AiOutlinePython />

                <p className={styles.InformativoPY}>
                  Versátil, legível e poderoso. Muito usado em automação,
                  backend, ciência de dados e inteligência artificial. Resolve
                  problemas rápido e sem drama sintático.
                </p>
              </li>

              <li className={styles.IconReact} title="React">
                <span className={styles.SpanReact}>React</span>
                <FaReact />

                <p className={styles.InformativoREACT}>
                  Biblioteca focada em interfaces modernas e componentes
                  reutilizáveis. Domina o front-end atual pela performance,
                  escalabilidade e ecossistema gigantesco.
                </p>
              </li>

              <li className={styles.IconNextJs} title="NextJS">
                <span className={styles.SpanNS}>Nextjs</span>
                <RiNextjsLine />

                <p className={styles.InformativoNEXTJS}>
                  Framework sobre React que resolve o “mundo real”: SEO, rotas,
                  SSR, SSG e performance. Ideal para aplicações profissionais e
                  produtos que precisam escalar.
                </p>
              </li>

              <li className={styles.IconJS} title="Javascript">
                <span className={styles.SpanJS}>Javascript</span>
                <IoLogoJavascript />

                <p className={styles.InformativoJS}>
                  A base da web moderna. Roda no navegador e no servidor,
                  conecta tudo e dá vida às interfaces, sendo indispensável.
                </p>
              </li>

              <li className={styles.IconTypeEscript} title="TypeScript">
                <span className={styles.SpanTS}>TypeScript</span>
                <TbBrandTypescript />

                <p className={styles.InformativoTS}>
                  Tipagem estática, previsibilidade que trás segurança ao
                  código, evitando bugs antes mesmo da aplicação rodar.
                </p>
              </li>
        
            </ul>
        
          </div>
        </div>

      </section>
    </>
  );
}
