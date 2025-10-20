import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.css";
import logoSrc from "./logo.svg";
import newLabelSrc from "./new-label.svg";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <Link href="#" className={styles.home}>
        <Image className={styles.logo} src={logoSrc} alt="blancy" width={171} height={40} />
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}>
              О компании
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}>
              Услуги
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}>
              Кейсы
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}>
              Вакансии
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={cn(styles.itemLink, styles.labelAnchor)}>
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
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}>
              Блог
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}>
              Контакты
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
};

export { Header };
