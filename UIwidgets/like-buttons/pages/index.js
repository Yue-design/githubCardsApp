import Head from "next/head";
import styles from "../styles/Home.module.css";
// import LikeButton from "../pages/_app";
import Reacth, { useState } from "react";

export default function Home(props) {
  const count = 1;
  const [hidden, setHidden] = useState(true);
  // const [hidden, setHidden1] = useState(true);
  // const [hidden, setHidden2] = useState(true);
  // const [hidden, setHidden3] = useState(true);
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
          <span>
            {hidden ? (
              <button
                onClick={() => {
                  setHidden(false);
                }}
              >
                Like
              </button>
            ) : (
              <a
                onClick={() => {
                  setHidden(false);
                }}
              >{`You liked article number ${count}.`}</a>
            )}
          </span>

          <span>
            {hidden ? (
              <button onClick={() => setHidden(false)}>read more</button>
            ) : (
              <a onClick={() => setHidden(true)}>read less</a>
            )}
          </span>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <span>
            {hidden ? (
              <button
                onClick={() => {
                  setHidden1(false);
                }}
              >
                Like
              </button>
            ) : (
              <a
                onClick={() => {
                  setHidden1(true);
                }}
              >{`You liked article number ${count + 1}.`}</a>
            )}
          </span>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <span>
            {hidden ? (
              <button
                onClick={() => {
                  setHidden2(false);
                }}
              >
                Like
              </button>
            ) : (
              <a
                onClick={() => {
                  setHidden2(true);
                }}
              >{`You liked article number ${count + 2}.`}</a>
            )}
          </span>
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
        <span>
          {hidden ? (
            <a
              onClick={() => {
                setHidden3(false);
              }}
            >
              Read More
            </a>
          ) : (
            <a
              onClick={() => {
                setHidden3(true);
              }}
            >
              Read Less
            </a>
          )}
        </span>
      </footer>
    </div>
  );
}
