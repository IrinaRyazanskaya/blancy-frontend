import Head from 'next/head';
import styles from '../styles/Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Контакты</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
            </Head>

            <main>
                Страница контактов
            </main>
        </div>
    )
}

export default Contacts;
