import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components/header";

const Contacts: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Контакты</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Header />

      <main>Страница контактов</main>
    </div>
  );
};

export default Contacts;
