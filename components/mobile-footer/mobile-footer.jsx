import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import logoSrc from './logo.svg';
import instIconSrc from './instagram.svg';
import vkIconSrc from './vk.svg';
import fbIconSrc from './facebook.svg';
import styles from './mobile-footer.module.css';

function MobileFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <div className={styles.imageWrap}>
                    <Image
                        className={styles.logo}
                        src={logoSrc}
                        alt="Логотип blancy"
                        width={123}
                        height={29}
                    />
                </div>
            </div>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <details className={styles.subMenuWrap}>
                        <summary className={styles.trigger}>
                            <div className={styles.arrowWrap}></div>
                            <div className={styles.triggerContent}>Услуги</div>
                            <div className={styles.arrowWrap}></div>
                        </summary>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Разработка</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Продвижение</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Реклама</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Брендинг</a>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li className={styles.item}>
                    <details className={styles.subMenuWrap}>
                        <summary className={styles.trigger}>
                            <div className={styles.arrowWrap}></div>
                            <div className={styles.triggerContent}>Агентство</div>
                            <div className={styles.arrowWrap}></div>
                        </summary>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>О компании</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Кейсы</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Вакансии</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Онлайн-школа</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Блог</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Контакты</a>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li className={styles.item}>
                    <details className={styles.subMenuWrap}>
                        <summary className={styles.trigger}>
                            <div className={styles.arrowWrap}></div>
                            <div className={styles.triggerContent}>Блог</div>
                            <div className={styles.arrowWrap}></div>
                        </summary>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>
                                        10 советов для ведения социальных сетей
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>
                                        Чем важна мобильная версия сайта в 2021?
                                    </a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>
                                        Создание продающего поста в Instagram - Лайфхак
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li className={styles.item}>
                    <details className={styles.subMenuWrap}>
                        <summary className={styles.trigger}>
                            <div className={styles.arrowWrap}></div>
                            <div className={styles.triggerContent}>Контакты</div>
                            <div className={styles.arrowWrap}></div>
                        </summary>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Звоните</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Пишите</a>
                                </Link>
                            </li>
                            <li className={styles.subMenuItem}>
                                <Link href="#">
                                    <a className={styles.itemLink}>Приезжайте</a>
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
            <div className={styles.socialNetworks}>
                <a
                    className={styles.socialLink}
                    href="https://www.instagram.com/blancy.ru"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className={styles.socialIcon}
                        src={instIconSrc}
                        alt="Иконка Instagram"
                        width={16}
                        height={17}
                    />
                </a>
                <a
                    className={styles.socialLink}
                    href="https://vk.com/blancy"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className={styles.socialIcon}
                        src={vkIconSrc}
                        alt="Иконка VK"
                        width={22}
                        height={13}
                    />
                </a>
                <a
                    className={styles.socialLink}
                    href="https://www.facebook.com/blancy.ru"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Image
                        className={styles.socialIcon}
                        src={fbIconSrc}
                        alt="Иконка Facebook"
                        width={10}
                        height={18}
                    />
                </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.securityWrap}>
                <Link href="#">
                    <a className={styles.security}>Пользовательское соглашение</a>
                </Link>
                <Link href="#">
                    <a className={styles.security}>Защита персональных данных</a>
                </Link>
                <p className={styles.text}>
                    © 2015-2021 ООО МОН АРТЕ. Все права защищены
                </p>
            </div>
        </footer>
    );
}

export { MobileFooter };
