import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";

import clockIconSrc from "./clock-icon.svg";
import styles from "./article-card.module.css";

function ArticleCard({
  href,
  articleImageSrc,
  articleImageAlt,
  width,
  height,
  category,
  title,
  readingTime,
  date, // '2021-11-09T16:51:05.767Z' (ISO8601)
}) {
  return (
    <Link href={href} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={articleImageSrc}
            alt={articleImageAlt}
            width={width}
            height={height}
          />
        </div>
        <div className={styles.category}>{category}</div>
        <p className={styles.title}>{title}</p>
        <div className={styles.wrap}>
          <time className={styles.date}>{format(new Date(date), "dd.MM.yyyy")}</time>
          <div className={styles.readingTimeWrap}>
            <div className={styles.iconWrap}>
              <Image
                className={styles.clockIcon}
                src={clockIconSrc}
                alt="Иконка часов"
                width={19}
                height={19}
              />
            </div>
            <span className={styles.readingTime}>Читать:&nbsp;</span>
            <span className={styles.readingTime}>{readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { ArticleCard };
