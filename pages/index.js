import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Voluptate sit voluptate nostrud id in Lorem nostrud occaecat et
          deserunt ea.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja ListIng</a>
        </Link>
      </div>
    </>
  );
}
