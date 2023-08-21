import { Profile } from "@/components/Profile";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Profile />
      <section>
        <h2>SOBRE MIM</h2>
        <p>
          Olá! Eu sou o Anderson Kauer!
          <br />
          Sou uma pessoa apaixonada por tecnologia e programação. Sempre em
          busca de novos desafios e aprendizados para aprimorar minhas
          habilidades como desenvolvedor.
        </p>
        <div>
          <h2>Dados pessoais</h2>
          <h3>Nome</h3>
          <p>Anderson Kauer de Sousa</p>
          <h3>Idade</h3>
          <p>22 anos</p>
          <h3>Endereço</h3>
          <p>Maranhão, Brasil</p>
          <h3>E-mail</h3>
          <p>contato@example.com</p>

          {/* idiomas */}
          <h2>Línguas</h2>
          <h3>Português</h3>
          <p>Nativo</p>
          <h3>Inglês</h3>
          <p>Intermediário</p>

          {/* caracteristicas pessoais */}
          <h2>Características pessoais</h2>
          <ul>
            <li>😎 Proativo</li>
            <li>👨‍💻 Desenvolvedor</li>
            <li>📚 Leitor ativo</li>
            <li>💼 Empreendedor</li>
            <li>🎓 Eterno Estudante</li>
          </ul>

          {/* Linguagens de programacao */}
          <h2>Linguagens de programação</h2>

          <h3>Front-end</h3>
          <p>HTML, CSS, JavaScript e React</p>

          <h3>Back-end</h3>
          <p>Node.js, Java e Python</p>

          {/* tecnologias */}

          <h2>Tecnologias, frameworks e ferramentas</h2>

          <h3>Front-end</h3>
          <p>React.js, React Native, Next.js, JavaScript/TypeScript</p>

          <h3>Backend</h3>
          <p>Node.js</p>

          <h3>Tools</h3>
          <p>Git</p>

          <h3>Testes</h3>
          <p>Em progresso [ Jest ] 😁😅</p>

          <h3>BDs</h3>
          <p>MySQL e MongoDB</p>
        </div>
      </section>
    </main>
  );
}
