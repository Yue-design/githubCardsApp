import Head from "next/head";
import styles from "../styles/Home.module.css";
import LikeButton from "../pages/_app";
import Reacth, { useState } from "react";

export default function Home(props) {
  const count = 1;
  const [hidden, setHidden] = useState(true);
  const text = "hello";

  return (
    <div className={styles.container}>
      <Head>
        <title>Multiple Like Buttons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Reference{" "}
          <a href="https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda">
            is here!
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          {/* <LikeButton></LikeButton> */}
          <button
            onClick={e => console.log(`You liked article number ${count}.`)}
          >
            Like
          </button>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <button onClick={() => setHidden(false)}>Like</button>

          <span>
            {text}
            {hidden ? (
              <a onClick={() => setHidden(false)}>read more</a>
            ) : (
              <a onClick={() => setHidden(true)}>read less</a>
            )}
          </span>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <button onClick={() => {console.log("here")}}>Like</button>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <button>Like</button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
