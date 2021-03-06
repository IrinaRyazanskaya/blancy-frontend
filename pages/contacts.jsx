import Head from 'next/head';

import { Header } from '../components/header';

import styles from '../styles/contacts.module.css';

function Contacts() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Контакты</title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
            </Head>

            <Header />

            <main>Страница контактов</main>
        </div>
    );
}

export default Contacts;
