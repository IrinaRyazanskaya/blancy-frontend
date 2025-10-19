import cn from "classnames";
import Link from "next/link";

import styles from "./service-card.module.css";

function ServiceCard({ lines, header, services }) {
  return (
    <div
      className={cn(styles.card, {
        [styles.cardLines1]: lines === 1,
        [styles.cardLines2]: lines === 2,
        [styles.cardLines3]: lines === 3,
        [styles.cardLines4]: lines === 4,
      })}
    >
      <h3 className={styles.header}>{header}</h3>
      <ul className={styles.services}>
        {services.map((service) => {
          return (
            <Link key={service.title} href={service.href} passHref={true}>
              <a className={styles.link}>
                <li className={styles.service}>{service.title}</li>
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export { ServiceCard };
