import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const words = ["spoken", "written", "thought", "imagined"];
  const [index, setIndex] = useState(Math.floor(Math.random()) * 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jasags Creative Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Jasags Creative Media Group LLC</h1>

        <img
          className={styles.logo2}
          src="/enhancedredwhitewithafrica.png"
          alt="Logo"
        />
        <div className={styles.butre}></div>
        <p className={styles.butreText}>The {words[index]} word</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with Next.js, powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
