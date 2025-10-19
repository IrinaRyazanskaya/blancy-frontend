import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import logoSrc from "./logo.svg";
import instIconSrc from "./instagram.svg";
import vkIconSrc from "./vk.svg";
import fbIconSrc from "./facebook.svg";
import styles from "./footer.module.css";

function Footer({ className }) {
  return (
    <footer className={cn(className, styles.footer)}>
      <section className={styles.navigation}>
        <div className={styles.column}>
          <div className={styles.logoWrap}>
            <Image
              className={styles.logo}
              src={logoSrc}
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
                src={instIconSrc}
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
                src={vkIconSrc}
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
                src={fbIconSrc}
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
              <Link href="#" passHref={true}>
                <a className={styles.itemLink}>→ Разработка</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" passHref={true}>
                <a className={styles.itemLink}>→ Продвижение</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" passHref={true}>
                <a className={styles.itemLink}>→ Реклама</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" passHref={true}>
                <a className={styles.itemLink}>→ Брендинг</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.header}>Агентство</h2>
          <ul className={styles.items}>
            <li className={styles.item}>
              <Link href="#" passHref={true}>
                <a className={styles.itemLink}>О компании</a>
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
                <a className={styles.itemLink}>Онлайн-школа</a>
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
        </div>
        <div className={styles.column}>
          <h2 className={styles.header}>Блог</h2>
          <ul className={styles.items}>
            <li className={styles.item}>
              <Link href="#" passHref={true}>
                <a className={styles.itemLink}>10 советов для ведения социальных сетей</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" passHref={true}>
                <a className={styles.itemLink}>Чем важна мобильная версия сайта в 2021?</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="#" passHref={true}>
                <a className={styles.itemLink}>Создание продающего поста в Instagram - Лайфхак</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.contacts}>
        <div className={styles.column}>
          <Link href="#" passHref={true}>
            <a className={styles.security}>Пользовательское соглашение</a>
          </Link>
          <Link href="#" passHref={true}>
            <a className={styles.security}>Защита персональных данных</a>
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
}

export { Footer };
