import cn from 'classnames';

import styles from './service-card.module.css';

function ServiceCard({ lines, header, services }) {
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
                        <li key={service} className={styles.service}>
                            {service}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export { ServiceCard };
