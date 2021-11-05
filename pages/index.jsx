import Head from 'next/head';
import { useUserAgent } from 'next-useragent';

import { Header } from '../components/header';
import { MobileHeader } from '../components/mobile-header';
import { HomeBanner } from '../components/home-banner';

import styles from '../styles/home.module.css';

function Home({ userAgent }) {
    const { isMobile } = useUserAgent(userAgent || window.navigator.userAgent);

    return (
        <div className={styles.container}>
            <Head>
                <title>Главная</title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {isMobile ? <MobileHeader /> : <Header />}

            <HomeBanner />

            <footer className={styles.footer}></footer>
        </div>
    );
}

async function getServerSideProps(context) {
    return {
        props: {
            userAgent: context.req.headers['user-agent'],
        },
    };
}

export { getServerSideProps };
export default Home;
