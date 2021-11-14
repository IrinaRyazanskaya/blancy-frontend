import cn from 'classnames';
import { ServiceCard } from '../service-card';

import styles from './services.module.css';

function Services({ title, caption, className }) {
    return (
        <section className={cn(styles.services, className)}>
            <div className={styles.headerWrap}>
                <h2 className={styles.header}>{title}</h2>
                {caption ? <p className={styles.caption}>{caption}</p> : null}
            </div>
            <div className={styles.serviceCards}>
                <ServiceCard
                    lines={4}
                    header="Разработка"
                    services={[
                        { title: 'Разработка лендингов', href: '#' },
                        { title: 'Разработка корпоративных сайтов', href: '#' },
                        { title: 'Разработка интернет-магазинов', href: '#' },
                    ]}
                />
                <ServiceCard
                    lines={4}
                    header="Продвижение"
                    services={[
                        { title: 'SEO-продвижение', href: '#' },
                        { title: 'SMM-продвижение', href: '#' },
                        { title: 'Instagram-продвижение', href: '#' },
                        { title: 'SERM-управление репутацией', href: '#' },
                    ]}
                />
                <ServiceCard
                    lines={2}
                    header="Реклама"
                    services={[
                        { title: 'Контекстная реклама в Яндекс.Директ', href: '#' },
                        { title: 'Контекстная реклама в Google AdWords', href: '#' },
                    ]}
                />
                <ServiceCard
                    lines={2}
                    header="Брендинг"
                    services={[
                        { title: 'Разработка логотипа', href: '#' },
                        { title: 'Разработка Фирменного стиля', href: '#' },
                    ]}
                />
            </div>
        </section>
    );
}

export { Services };
