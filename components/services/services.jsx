import { ServiceCard } from '../service-card';

import styles from './services.module.css';

function Services({ title, caption }) {
    return (
        <section className={styles.services}>
            <div className={styles.headerWrap}>
                <h2 className={styles.header}>{title}</h2>
                {caption ? <p className={styles.caption}>{caption}</p> : null}
            </div>
            <div className={styles.serviceCards}>
                <ServiceCard
                    lines={4}
                    header="Разработка"
                    services={[
                        'Разработка лендингов',
                        'Разработка корпоративных сайтов',
                        'Разработка интернет-магазинов',
                    ]}
                />
                <ServiceCard
                    lines={4}
                    header="Продвижение"
                    services={[
                        'SEO-продвижение',
                        'SMM-продвижение',
                        'Instagram-продвижение',
                        'SERM-управление репутацией',
                    ]}
                />
                <ServiceCard
                    lines={2}
                    header="Реклама"
                    services={[
                        'Контекстная реклама в Яндекс.Директ',
                        'Контекстная реклама в Google AdWords',
                    ]}
                />
                <ServiceCard
                    lines={2}
                    header="Брендинг"
                    services={['Разработка логотипа', 'Разработка Фирменного стиля']}
                />
            </div>
        </section>
    );
}

export { Services };
