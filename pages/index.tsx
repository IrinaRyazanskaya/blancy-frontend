import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components/header";
import { MobileHeader } from "../components/mobile-header";
import { HomeBanner } from "../components/home-banner";
import { Cases } from "../components/cases";
import { AboutCompany } from "../components/about-company";
import { PeopleSays } from "../components/people-says";
import { PeopleTrust } from "../components/people-trust";
import { Services } from "../components/services";
import { Articles } from "../components/articles";
import { Questions } from "../components/questions";
import { PartnershipProposal } from "../components/partnership-proposal";
import { Footer } from "../components/footer";
import { MobileFooter } from "../components/mobile-footer";
import { useDeviceInfo } from "../hooks/device-info";

import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  const { isPhone } = useDeviceInfo();

  return (
    <div className={styles.container}>
      <Head>
        <title>Главная</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mobileOnly">
        <MobileHeader />
      </div>
      <div className="desktopOnly">
        <Header className={styles.header} />
      </div>

      <HomeBanner className={styles.banner} />
      <Cases className={styles.cases} />
      <AboutCompany className={styles.aboutCompany} />
      <PeopleSays isPhone={isPhone} className={styles.peopleSays} />
      <PeopleTrust className={styles.peopleTrust} />
      <Questions
        question="Есть вопросы?"
        description={
          <span>
            Оставьте свой номер телефона и получите <strong>Бесплатную консультацию</strong> от
            наших специалистов
          </span>
        }
        className={styles.questions}
      />
      <Services
        title="Услуги"
        caption="Мы относимся к бизнесу своих партнеров, как к своему!"
        className={styles.services}
      />
      <Articles title="Полезные статьи" linkText="Все статьи →" className={styles.articles} />
      <PartnershipProposal className={styles.proposal} />

      <div className="mobileOnly">
        <MobileFooter />
      </div>
      <div className="desktopOnly">
        <Footer className={styles.footer} />
      </div>
    </div>
  );
};

export default Home;
