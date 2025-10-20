import Image from "next/image";
import type { StaticImageData } from "next/image";

import styles from "./review.module.css";

type ReviewProps = {
  name: string;
  reviewImageSrc: StaticImageData | string;
  reviewImageAlt: string;
  isPhone: boolean;
};

const Review = ({ name, reviewImageSrc, reviewImageAlt, isPhone }: ReviewProps) => {
  return (
    <div className={styles.review}>
      <div className={styles.logoWrap}>
        {isPhone ? (
          <Image
            className={styles.logo}
            src={reviewImageSrc}
            alt={reviewImageAlt}
            width={120}
            height={120}
          />
        ) : (
          <Image
            className={styles.logo}
            src={reviewImageSrc}
            alt={reviewImageAlt}
            width={160}
            height={160}
          />
        )}
      </div>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export { Review };
