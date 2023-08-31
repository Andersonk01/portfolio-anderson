"use client";
import { useState, useEffect } from "react";
import styles from "./project.module.css";
import { CardList } from "./components/CardList";

interface GitHubRepository {
  id: number;
  name: string;
  description: string;
}

export default function Projects() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Andersonk01/repos?per_page=6"
        );
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }

    fetchRepositories();
  }, []);

  return (
    <main className={styles.main}>
      {repositories.length === 0 ? (
        <p>Loading...</p>
      ) : (
        repositories.map((repo) => (
          <CardList
            key={repo.id}
            name={repo.name}
            description={repo.description}
            // You can construct the URL to the GitHub repository page
            url={`https://github.com/Andersonk01/${repo.name}`}
          />
        ))
      )}
    </main>
  );
}
