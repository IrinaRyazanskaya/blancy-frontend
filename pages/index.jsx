import Head from 'next/head';

import { Header } from '../components/header';

import styles from '../styles/home.module.css';

function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Главная</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}></main>

            <footer className={styles.footer}></footer>
        </div>
    );
}

export default Home;
