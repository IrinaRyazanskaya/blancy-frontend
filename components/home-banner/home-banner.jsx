import cn from 'classnames';
import Image from 'next/image';

import styles from './home-banner.module.css';
import homeBannerImageSrc from './home-banner-image.png';

function HomeBanner({ className }) {
    return (
        <div className={cn(className, styles.banner)}>
            <div className={styles.content}>
                <h1 className={styles.header}>Digital-агентство Blancy</h1>
                <p className={styles.text}>
                    Мы занимаемся созданием сайтов, SEO продвижением, SMM, брендингом и
                    развиваем сферу digital.
                </p>
            </div>
            <div className={styles.imageWrap}>
                <Image
                    className={styles.image}
                    src={homeBannerImageSrc}
                    alt="Сотрудники digital-агенства"
                    loading="eager"
                    width={561}
                    height={479}
                />
            </div>
        </div>
    );
}

export { HomeBanner };
