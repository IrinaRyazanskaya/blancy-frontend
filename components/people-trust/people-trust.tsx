import cn from "classnames";
import { CompanyLogo } from "../company-logo";

import styles from "./people-trust.module.css";
import cleanLineLogoSrc from "./clean-line-logo.png";
import sohoRoomsLogoSrc from "./soho-rooms-logo.png";
import bioLogoSrc from "./bio-logo.png";
import edeleLogoSrc from "./edele-logo.png";
import titLogoSrc from "./tit-logo.png";
import luminaDecoLogoSrc from "./lumina-deco-logo.png";
import panoramaLogoSrc from "./panorama-logo.png";
import damiDomoLogoSrc from "./dami-domo-logo.png";
import gaLogoSrc from "./ga-logo.png";

type PeopleTrustProps = {
  className?: string;
};

const PeopleTrust = ({ className }: PeopleTrustProps) => {
  return (
    <section className={cn(className, styles.peopleTrust)}>
      <h2 className={styles.header}>Нам доверяют</h2>
      <p className={styles.description}>
        Более 100 компаний доверили нам свои коммуникации. Со многими сотрудничаем на протяжении 5-6
        лет.
      </p>
      <button className={styles.button}>Стать клиентом →</button>
      <div className={styles.companyLogos}>
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={cleanLineLogoSrc}
          logoAlt="Логотип компании Чистая линия"
          width={229}
          height={180}
        />
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={sohoRoomsLogoSrc}
          logoAlt="Логотип компании Soho Room"
          width={229}
          height={180}
        />
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={bioLogoSrc}
          logoAlt="Логотип компании Bio"
          width={229}
          height={180}
        />
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={edeleLogoSrc}
          logoAlt="Логотип компании Edele"
          width={229}
          height={180}
        />
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={titLogoSrc}
          logoAlt="Логотип компании Синица"
          width={229}
          height={180}
        />
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={luminaDecoLogoSrc}
          logoAlt="Логотип компании Lumina Deco"
          width={229}
          height={180}
        />
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={panoramaLogoSrc}
          logoAlt="Логотип компании Panorama 360"
          width={229}
          height={180}
        />
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={damiDomoLogoSrc}
          logoAlt="Логотип компании Dami Domo"
          width={229}
          height={180}
        />
        <CompanyLogo
          className={styles.companyLogo}
          logoSrc={gaLogoSrc}
          logoAlt="Логотип компании GA"
          width={229}
          height={180}
        />
      </div>
    </section>
  );
};

export { PeopleTrust };
