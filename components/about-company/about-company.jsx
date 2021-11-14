import cn from 'classnames';

import { Facts } from '../facts/facts';

import officeImageSrc from './office.jpeg';
import styles from './about-company.module.css';

function AboutCompany({ className }) {
    return (
        <section className={cn(className, styles.aboutCompany)}>
            <h3 className={styles.header}>О компании</h3>
            <div className={styles.content}>
                <div className={styles.factsWrap}>
                    <Facts number="с 2015" description={`Работает наша\nкомпания.`} />
                    <Facts
                        number=">100"
                        description={`Реализовали\nуспешных проектов`}
                    />
                    <Facts number="18" description="Квалифицированных сотрудников" />
                    <Facts
                        number="65%"
                        description="Клиентов обращаются к нам через рекомендации"
                    />
                </div>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${officeImageSrc})` }}
                />
            </div>
        </section>
    );
}

export { AboutCompany };
