import cn from "classnames";
import { Review } from "../reviews";

import styles from "./people-says.module.css";
import ruwardLogoSrc from "./ruward-logo.png";
import ardaLogoSrc from "./arda-logo.png";

type PeopleSaysProps = {
  isPhone: boolean;
  className?: string;
};

const PeopleSays = ({ isPhone, className }: PeopleSaysProps) => {
  return (
    <section className={cn(className, styles.peopleSays)}>
      <div className={styles.wrap}>
        <h2 className={styles.header}>О нас говорят</h2>
        <div className={styles.reviews}>
          <a
            className={styles.link}
            href="https://ruward.ru/context/industry-furniture-household/"
            target="_blank"
            rel="noreferrer"
          >
            <Review
              name="2019: Рейтинг лучших агентств (Контекстная реклама)"
              reviewImageSrc={ruwardLogoSrc}
              reviewImageAlt="Логотип RUWARD"
              isPhone={isPhone}
            />
          </a>
          <a className={styles.link} href="https://arda.digital/" target="_blank" rel="noreferrer">
            <Review
              name="Ассоциация развития диджитал-агентств"
              reviewImageSrc={ardaLogoSrc}
              reviewImageAlt="Логотип ARDA"
              isPhone={isPhone}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export { PeopleSays };
