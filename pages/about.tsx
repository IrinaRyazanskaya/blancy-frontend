import Head from "next/head";
import { useUserAgent } from "next-useragent";
import type { GetServerSideProps, NextPage } from "next";

import { Header } from "../components/header";
import { MobileHeader } from "../components/mobile-header";
import { Footer } from "../components/footer";
import { MobileFooter } from "../components/mobile-footer";

type AboutProps = {
  userAgent: string | null;
};

const About: NextPage<AboutProps> = ({ userAgent }) => {
  const userAgentString =
    userAgent ?? (typeof window !== "undefined" ? window.navigator.userAgent : "");
  const { isMobile } = useUserAgent(userAgentString);

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

export const getServerSideProps: GetServerSideProps<AboutProps> = async ({ req }) => {
  return {
    props: {
      userAgent: req?.headers["user-agent"] ?? null,
    },
  };
};

export default About;
