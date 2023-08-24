import styles from "./project.module.css";
import { CardList } from "./components/CardList";

import Image from "next/image";

export default function Projects() {
  return (
    <main className={styles.main}>
      <CardList
        name="Unsplash Search"
        description="O projeto utiliza a API do Unsplash para buscar e exibir imagens com base no termo de busca fornecido pelo usuário."
        url="/img1.png"
      />

      <CardList
        name="Pokedex"
        description="Esta é uma Pokedex simples criada usando as seguintes tecnologias: Vite, TypeScript, React.js e CSS."
      />
      <CardList description="Esta é uma Pokedex simples criada usando as seguintes tecnologias: Vite, TypeScript, React.js e CSS." />
      <CardList description="Esta é uma Pokedex simples criada usando as seguintes tecnologias: Vite, TypeScript, React.js e CSS." />
      <CardList description="Esta é uma Pokedex simples criada usando as seguintes tecnologias: Vite, TypeScript, React.js e CSS." />
      <CardList description="Esta é uma Pokedex simples criada usando as seguintes tecnologias: Vite, TypeScript, React.js e CSS." />
      <CardList description="Esta é uma Pokedex simples criada usando as seguintes tecnologias: Vite, TypeScript, React.js e CSS." />
      <CardList description="Esta é uma Pokedex simples criada usando as seguintes tecnologias: Vite, TypeScript, React.js e CSS." />
    </main>
  );
}
