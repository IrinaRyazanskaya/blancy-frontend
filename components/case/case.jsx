import Image from "next/image";
import Link from "next/link";

import styles from "./case.module.css";
import arrowSrc from "./arrow.svg";

function Case({ header, description, link, caseImageSrc }) {
  return (
    <div className={styles.case}>
      <h3 className={styles.header}>{header}</h3>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <p className={styles.description}>{description}</p>
          <Link href={link} passHref={true}>
            <a className={styles.link}>
              <span className={styles.linkText}>Посмотреть кейс</span>
              <Image className={styles.arrow} src={arrowSrc} alt="Стрелка" width={16} height={16} />
            </a>
          </Link>
        </div>
        <div className={styles.image} style={{ backgroundImage: `url(${caseImageSrc})` }} />
      </div>
    </div>
  );
}

export { Case };
