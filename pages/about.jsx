import Head from "next/head";
import { useUserAgent } from "next-useragent";

import { Header } from "../components/header";
import { MobileHeader } from "../components/mobile-header";
import { Footer } from "../components/footer";
import { MobileFooter } from "../components/mobile-footer";

import styles from "../styles/about.module.css";

function About({ userAgent }) {
  const { isMobile, isTablet } = useUserAgent(userAgent || window.navigator.userAgent);
  const isPhone = isMobile && !isTablet;

  return (
    <div className={styles.container}>
      <Head>
        <title>О компании</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile ? <MobileHeader /> : <Header className={styles.header} />}
      <section className={styles.descriptions}>
        <p className={styles.description}>
          C 2015 года помогаем клиентам создавать стильные веб проекты и увеличивать прибыль на
          динамично развивающемся рынке диджитал в России.
        </p>
        <p className={styles.description}>
          Мы создаем проекты, от которых ваши потенциальные клиенты будут в восторге и самое главное
          - мы делаем это в срок ⚡
        </p>
      </section>
      {isMobile ? <MobileFooter /> : <Footer className={styles.footer} />}
    </div>
  );
}

async function getServerSideProps(context) {
  return {
    props: {
      userAgent: context.req.headers["user-agent"],
    },
  };
}

export { getServerSideProps };
export default About;
