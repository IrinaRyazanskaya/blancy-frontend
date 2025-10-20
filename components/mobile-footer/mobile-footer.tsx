import Image from "next/image";
import Link from "next/link";

import logoSrc from "./logo.svg";
import arrowSrc from "./arrow.svg";
import instIconSrc from "./instagram.svg";
import vkIconSrc from "./vk.svg";
import fbIconSrc from "./facebook.svg";
import styles from "./mobile-footer.module.css";

const MobileFooter = () => {
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
              <div className={styles.triggerWrap}>
                <div className={styles.arrowWrap}>
                  <Image
                    className={styles.arrow}
                    src={arrowSrc}
                    alt="Стрелка вниз"
                    width={16}
                    height={8}
                  />
                </div>
                <div className={styles.triggerContent}>Услуги</div>
                <div className={styles.arrowWrap}>
                  <Image
                    className={styles.arrow}
                    src={arrowSrc}
                    alt="Стрелка вниз"
                    width={16}
                    height={8}
                  />
                </div>
              </div>
            </summary>
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Разработка
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Продвижение
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Реклама
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Брендинг
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li className={styles.item}>
          <details className={styles.subMenuWrap}>
            <summary className={styles.trigger}>
              <div className={styles.triggerWrap}>
                <div className={styles.arrowWrap}>
                  <Image
                    className={styles.arrow}
                    src={arrowSrc}
                    alt="Стрелка вниз"
                    width={16}
                    height={8}
                  />
                </div>
                <div className={styles.triggerContent}>Агентство</div>
                <div className={styles.arrowWrap}>
                  <Image
                    className={styles.arrow}
                    src={arrowSrc}
                    alt="Стрелка вниз"
                    width={16}
                    height={8}
                  />
                </div>
              </div>
            </summary>
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  О компании
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Кейсы
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Вакансии
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Онлайн-школа
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Блог
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Контакты
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li className={styles.item}>
          <details className={styles.subMenuWrap}>
            <summary className={styles.trigger}>
              <div className={styles.triggerWrap}>
                <div className={styles.arrowWrap}>
                  <Image
                    className={styles.arrow}
                    src={arrowSrc}
                    alt="Стрелка вниз"
                    width={16}
                    height={8}
                  />
                </div>
                <div className={styles.triggerContent}>Блог</div>
                <div className={styles.arrowWrap}>
                  <Image
                    className={styles.arrow}
                    src={arrowSrc}
                    alt="Стрелка вниз"
                    width={16}
                    height={8}
                  />
                </div>
              </div>
            </summary>
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  10 советов для ведения социальных сетей
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Чем важна мобильная версия сайта в 2021?
                </Link>
              </li>
              <li className={styles.subMenuItem}>
                <Link href="#" className={styles.itemLink}>
                  Создание продающего поста в Instagram - Лайфхак
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li className={styles.item}>
          <details className={styles.subMenuWrap}>
            <summary className={styles.trigger}>
              <div className={styles.triggerWrap}>
                <div className={styles.arrowWrap}>
                  <Image
                    className={styles.arrow}
                    src={arrowSrc}
                    alt="Стрелка вниз"
                    width={16}
                    height={8}
                  />
                </div>
                <div className={styles.triggerContent}>Контакты</div>
                <div className={styles.arrowWrap}>
                  <Image
                    className={styles.arrow}
                    src={arrowSrc}
                    alt="Стрелка вниз"
                    width={16}
                    height={8}
                  />
                </div>
              </div>
            </summary>
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>
                <p className={styles.invite}>Звоните</p>
                <a className={styles.contact} href="tel:+74954773356">
                  + 7 (495) 477-33-56
                </a>
              </li>
              <li className={styles.subMenuItem}>
                <p className={styles.invite}>Пишите</p>
                <a className={styles.contact} href="mailto:info@blancy.ru">
                  info@blancy.ru
                </a>
              </li>
              <li className={styles.subMenuItem}>
                <p className={styles.invite}>Приезжайте</p>
                <a
                  className={styles.contact}
                  href="https://yandex.ru/maps/-/CCUueIf9OA"
                  target="_blank"
                  rel="noreferrer"
                >
                  г. Долгопрудный Лихачевский проспект, 18
                </a>
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
      <div className={styles.divider} />
      <div className={styles.securityWrap}>
        <Link href="#" className={styles.security}>
          Пользовательское соглашение
        </Link>
        <Link href="#" className={styles.security}>
          Защита персональных данных
        </Link>
        <p className={styles.text}>© 2015-2021 ООО МОН АРТЕ. Все права защищены</p>
      </div>
    </footer>
  );
};

export { MobileFooter };
