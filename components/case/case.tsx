import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

import { arrowImage } from "../../assets/images";

import styles from "./case.module.css";

type CaseProps = {
  header: string;
  description: string;
  link: string;
  caseImageSrc: StaticImageData | string;
  caseImageAlt?: string;
};

const Case = ({ header, description, link, caseImageSrc }: CaseProps) => {
  const imageUrl = typeof caseImageSrc === "string" ? caseImageSrc : caseImageSrc.src;
  return (
    <div className={styles.case}>
      <h3 className={styles.header}>{header}</h3>
      <div className={styles.content}>
        <div className={styles.wrap}>
          <p className={styles.description}>{description}</p>
          <Link href={link} className={styles.link}>
            <span className={styles.linkText}>Посмотреть кейс</span>
            <Image
              className={styles.arrow}
              src={arrowImage}
              alt="Стрелка"
              width={16}
              height={16}
            />
          </Link>
        </div>
        <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }} />
      </div>
    </div>
  );
};

export { Case };
