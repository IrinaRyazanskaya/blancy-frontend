import Head from "next/head";
import type { NextPage } from "next";

import { Header } from "../components/header";
import { MobileHeader } from "../components/mobile-header";
import { Footer } from "../components/footer";
import { MobileFooter } from "../components/mobile-footer";
import { useDeviceInfo } from "../hooks/device-info";

const About: NextPage = () => {
  const { isMobile } = useDeviceInfo();

  return (
    <div>
      <Head>
        <title>О компании</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile ? <MobileHeader /> : <Header />}
      <section>
        <p>
          C 2015 года помогаем клиентам создавать стильные веб проекты и увеличивать прибыль на
          динамично развивающемся рынке диджитал в России.
        </p>
        <p>
          Мы создаем проекты, от которых ваши потенциальные клиенты будут в восторге и самое главное
          - мы делаем это в срок ⚡
        </p>
      </section>
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default About;
