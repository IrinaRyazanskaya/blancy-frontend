import cn from 'classnames';
import Image from 'next/image';

import { Facts } from '../facts/facts';

import styles from './about-company.module.css';
import officeSrc from './office.png';
import mobileOfficeSrc from './mobile-office.png';

function AboutCompany({ isPhone, className }) {
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
                <div className={styles.imageWrap}>
                    {isPhone ? (
                        <Image
                            className={styles.mobileImage}
                            src={mobileOfficeSrc}
                            alt="Офис Digital-агентства Blancy"
                            width={300}
                            height={480}
                        />
                    ) : (
                        <Image
                            className={styles.image}
                            src={officeSrc}
                            alt="Офис Digital-агентства Blancy"
                            width={980}
                            height={620}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export { AboutCompany };
