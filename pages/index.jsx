import Head from 'next/head';
import { useUserAgent } from 'next-useragent';

import { Header } from '../components/header';
import { MobileHeader } from '../components/mobile-header';
import { HomeBanner } from '../components/home-banner';
import { Cases } from '../components/cases';
import { AboutCompany } from '../components/about-company';
import { PeopleSays } from '../components/people-says';
import { PeopleTrust } from '../components/people-trust';
import { Services } from '../components/services';

import styles from '../styles/home.module.css';

function Home({ userAgent }) {
    const { isMobile, isTablet } = useUserAgent(
        userAgent || window.navigator.userAgent,
    );
    const isPhone = isMobile && !isTablet;

    return (
        <div className={styles.container}>
            <Head>
                <title>Главная</title>
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {isMobile ? <MobileHeader /> : <Header />}

            <HomeBanner />
            <Cases isMobile={isMobile} />
            <AboutCompany isPhone={isPhone} />
            <PeopleSays isMobile={isMobile} />
            <PeopleTrust />
            <Services
                title="Услуги"
                caption="Мы относимся к бизнесу своих партнеров, как к своему!"
            />

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
