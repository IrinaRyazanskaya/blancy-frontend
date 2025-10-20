import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import {
  footerFacebookLogo,
  footerInstagramLogo,
  footerLogo,
  footerVkLogo,
} from "../../assets/images";

import styles from "./footer.module.css";

type FooterProps = {
  className?: string;
};

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)}>
      <section className={styles.navigation}>
        <div className={styles.column}>
          <div className={styles.logoWrap}>
            <Image
              className={styles.logo}
              src={footerLogo}
              alt="Логотип blancy"
              width={186}
              height={44}
            />
          </div>
          <p className={styles.text}>© 2015-2021 ООО МОН АРТЕ. Все права защищены</p>
          <div className={styles.socialNetworks}>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/blancy.ru"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className={styles.socialIcon}
                src={footerInstagramLogo}
                alt="Иконка Instagram"
                width={19}
                height={20}
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
                src={footerVkLogo}
                alt="Иконка VK"
                width={25}
                height={15}
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
                src={footerFacebookLogo}
                alt="Иконка Facebook"
                width={11}
                height={21}
              />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.header}>Услуги</h2>
          <ul className={styles.items}>
            <li className={styles.item}>
              <Link href="#" className={styles.itemLink}>
                → Разработка
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.itemLink}>
                → Продвижение
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.itemLink}>
                → Реклама
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.itemLink}>
                → Брендинг
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.header}>Агентство</h2>
          <ul className={styles.items}>
            <li className={styles.item}>
              <Link href="#" className={styles.itemLink}>
                О компании
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
              <Link href="#" className={styles.itemLink}>
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
        </div>
        <div className={styles.column}>
          <h2 className={styles.header}>Блог</h2>
          <ul className={styles.items}>
            <li className={styles.item}>
              <Link href="#" className={styles.itemLink}>
                10 советов для ведения социальных сетей
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.itemLink}>
                Чем важна мобильная версия сайта в 2021?
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" className={styles.itemLink}>
                Создание продающего поста в Instagram - Лайфхак
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.contacts}>
        <div className={styles.column}>
          <Link href="#" className={styles.security}>
            Пользовательское соглашение
          </Link>
          <Link href="#" className={styles.security}>
            Защита персональных данных
          </Link>
        </div>
        <div className={styles.column}>
          <p className={styles.invite}>Звоните:</p>
          <a className={styles.contact} href="tel:+74954773356">
            + 7 (495) 477-33-56
          </a>
        </div>
        <div className={styles.column}>
          <p className={styles.invite}>Пишите:</p>
          <a className={styles.contact} href="mailto:info@blancy.ru">
            info@blancy.ru
          </a>
        </div>
        <div className={styles.column}>
          <p className={styles.invite}>Приезжайте:</p>
          <a
            className={styles.contact}
            href="https://yandex.ru/maps/-/CCUueIf9OA"
            target="_blank"
            rel="noreferrer"
          >
            г. Долгопрудный Лихачевский проспект, 18
          </a>
        </div>
      </section>
    </footer>
  );
};

export { Footer };
