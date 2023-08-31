import { Profile } from "@/components/Profile";
import styles from "./page.module.css";
import { ContainerAbout } from "@/components/ContainerAbout";

import { Hidden } from "@/components/ButtonTop";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
      <ContainerAbout>
        <Sidebar />
        <section>
          <h1>SOBRE MIM</h1>
          <p>
            Olá! Eu sou o Anderson Kauer!
            <br />
            Sou uma pessoa apaixonada por tecnologia e programação. Sempre em
            busca de novos desafios e aprendizados para aprimorar minhas
            habilidades como desenvolvedor. Minha jornada inclui projetos
            desafiadores onde transformo conceitos em interfaces envolventes e
            intuitivas.😆📚🔥
          </p>
          <div>
            <span>
              {/* dados pessoais */}
              <div>
                <h2>Dados pessoais</h2>
                <h4>Nome:</h4>
                <p>Anderson Kauer de Sousa Santos</p>
                <h4>Idade:</h4>
                <p>22 anos</p>
                <h4>Endereço:</h4>
                <p>Maranhão, Brasil</p>
                <h4>E-mail:</h4>
                <p>kauercode@gmail.com</p>
              </div>

              {/* caracteristicas pessoais */}
              <div>
                <h2>Características pessoais</h2>
                <ul>
                  <li>😎 Proativo</li>
                  <li>👨‍💻 Desenvolvedor</li>
                  <li>📚 Leitor ativo</li>
                  <li>💼 Empreendedor</li>
                  <li>🎓 Eterno Estudante</li>
                </ul>
              </div>
            </span>

            {/* idiomas */}
            <h2>Línguas</h2>
            <h4>Português:</h4>
            <p>Nativo</p>
            <h4>Inglês:</h4>
            <p>Intermediário</p>

            {/* Linguagens de programacao */}
            <h3 id="skills">Linguagens de programação</h3>

            <h4>Front-end:</h4>
            <p>HTML, CSS, JavaScript e React</p>

            <h4>Back-end:</h4>
            <p>TypeScript, JavaScript e Node.js</p>

            {/* tecnologias */}

            <h3>Tecnologias, frameworks e ferramentas</h3>

            <h4>Front-end:</h4>
            <p>React.js, React Native, Next.js, JavaScript / TypeScript</p>

            <h4>Backend:</h4>
            <p>Node.js</p>

            <h4>Tools:</h4>
            <p>Git</p>

            <h4>Testes:</h4>
            <p>Em progresso [ Jest ] 😁😅</p>

            <h4>BDs:</h4>
            <p>Básico de MongoDB</p>
          </div>
        </section>
        {/* <span>asfsdf</span> */}
      </ContainerAbout>
      <Hidden />
    </main>
  );
}
