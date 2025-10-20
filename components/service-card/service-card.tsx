import cn from "classnames";
import Link from "next/link";

import styles from "./service-card.module.css";

type ServiceItem = {
  title: string;
  href: string;
};

type ServiceCardProps = {
  lines: 1 | 2 | 3 | 4;
  header: string;
  services: ServiceItem[];
};

const ServiceCard = ({ lines, header, services }: ServiceCardProps) => {
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
            <li key={service.title} className={styles.service}>
              <Link href={service.href} className={styles.link}>
                {service.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { ServiceCard };
