import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';
import logoSrc from './logo.svg';
import newLabelSrc from './new-label.svg';

function Header({ className }) {
    return (
        <header className={cn(styles.header, className)}>
            <Link href="#" passHref={true}>
                <a className={styles.home}>
                    <Image
                        className={styles.logo}
                        src={logoSrc}
                        alt="blancy"
                        width={171}
                        height={40}
                    />
                </a>
            </Link>
            <nav className={styles.navigation}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="#" passHref={true}>
                            <a className={styles.itemLink}>О компании</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#" passHref={true}>
                            <a className={styles.itemLink}>Услуги</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#" passHref={true}>
                            <a className={styles.itemLink}>Кейсы</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#" passHref={true}>
                            <a className={styles.itemLink}>Вакансии</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#" passHref={true}>
                            <a className={cn(styles.itemLink, styles.labelAnchor)}>
                                <div className={styles.itemLabel}>
                                    <Image
                                        className={styles.newLabel}
                                        src={newLabelSrc}
                                        alt="new"
                                        width={42}
                                        height={26}
                                    />
                                </div>
                                Онлайн-школа
                            </a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#" passHref={true}>
                            <a className={styles.itemLink}>Блог</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#" passHref={true}>
                            <a className={styles.itemLink}>Контакты</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.contacts}>
                <a className={styles.phoneNumber} href="tel:+74954773356">
                    + 7 (495) 477-33-56
                </a>
                <a className={styles.email} href="mailto:info@blancy.ru">
                    info@blancy.ru
                </a>
            </div>
            <button className={styles.startProject}>Начать проект</button>
        </header>
    );
}

export { Header };
