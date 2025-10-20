import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import { mobileMenuNewLabel } from "../../assets/images";

import styles from "./mobile-menu.module.css";

type MobileMenuProps = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div className={cn(styles.menu, { [styles.menuOpen]: isOpen })}>
      <nav className={cn(styles.navigation, { [styles.navigationOpen]: isOpen })}>
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
                  src={mobileMenuNewLabel}
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
};

export { MobileMenu };
