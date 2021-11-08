import { Review } from '../reviews';

import styles from './people-says.module.css';
import ruwardLogoSrc from './ruward-logo.png';
import ardaLogoSrc from './arda-logo.png';

function PeopleSays({ isMobile }) {
    return (
        <section className={styles.peopleSays}>
            <div className={styles.wrap}>
                <h2 className={styles.header}>О нас говорят</h2>
                <div className={styles.reviews}>
                    <Review
                        name="2019: Рейтинг лучших агентств (Контекстная реклама)"
                        reviewImageSrc={ruwardLogoSrc}
                        reviewImageAlt="Логотип RUWARD"
                        isMobile={isMobile}
                    />
                    <Review
                        name="Ассоциация развития диджитал-агентств"
                        reviewImageSrc={ardaLogoSrc}
                        reviewImageAlt="Логотип ARDA"
                        isMobile={isMobile}
                    />
                </div>
            </div>
        </section>
    );
}

export { PeopleSays };
