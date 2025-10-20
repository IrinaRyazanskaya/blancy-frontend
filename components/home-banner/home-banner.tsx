import cn from "classnames";
import Image from "next/image";

import styles from "./home-banner.module.css";
import homeBannerImageSrc from "./home-banner-image.png";

type HomeBannerProps = {
  className?: string;
};

const HomeBanner = ({ className }: HomeBannerProps) => {
  return (
    <div className={cn(className, styles.banner)}>
      <div className={styles.content}>
        <h1 className={styles.header}>Digital-агентство Blancy</h1>
        <p className={styles.text}>
          Мы занимаемся созданием сайтов, SEO продвижением, SMM, брендингом и развиваем сферу
          digital.
        </p>
      </div>
      <div className={styles.imageWrap}>
        <Image
          className={styles.image}
          src={homeBannerImageSrc}
          alt="Сотрудники digital-агенства"
          loading="eager"
          sizes="(max-width: 600px) 80vw, (max-width: 1024px) 60vw, (max-width: 1600px) 40vw, 560px"
          width={561}
          height={479}
        />
      </div>
    </div>
  );
};

export { HomeBanner };
