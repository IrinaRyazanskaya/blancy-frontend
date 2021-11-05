import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './mobile-menu.module.css';
import newLabelSrc from './new-label.svg';

function MobileMenu({ isOpen }) {
    return (
        <div className={cn(styles.menu, { [styles.menuOpen]: isOpen })}>
            <nav className={cn(styles.navigation, { [styles.navigationOpen]: isOpen })}>
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
            <div
                className={cn(styles.communication, {
                    [styles.communicationOpen]: isOpen,
                })}
            >
                <div className={styles.contacts}>
                    <a className={styles.phoneNumber} href="tel:+74954773356">
                        + 7 (495) 477-33-56
                    </a>
                    <a className={styles.email} href="mailto:info@blancy.ru">
                        info@blancy.ru
                    </a>
                </div>
                <button className={styles.startProject}>Начать проект</button>
            </div>
        </div>
    );
}

export { MobileMenu };
