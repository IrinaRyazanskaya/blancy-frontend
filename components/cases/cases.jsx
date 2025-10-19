import cn from "classnames";

import { Case } from "../case/case";

import styles from "./cases.module.css";
import cleanLineSrc from "./clean-line.png";
import luminaDecoSrc from "./lumina-deco.png";
import veterinaryClinicSrc from "./veterinary-clinic.png";
import lawFirmSrc from "./law-firm.png";
import robinaniSrc from "./robinani.png";

function Cases({ className }) {
  return (
    <section className={cn(className, styles.cases)}>
      <h2 className={styles.header}>Кейсы</h2>
      <Case
        header={"Логотип для фабрики\nмороженого «Чистая Линия»"}
        description="Чистая Линия - производитель мороженого №1 в России. Компанию ценят за
                эталонный вкус и самое главное - это использование только натуральных ингредиентов
                без ГМО."
        link="#"
        caseImageSrc={cleanLineSrc}
        caseImageAlt="Мороженное Лакомка"
      />
      <Case
        header="Интернет-магазин светильников Lumina Deco"
        description="Lumina Deco - крупный польский производитель осветительного
                оборудования. Компания представлена в Польше, Италии и России."
        link="#"
        caseImageSrc={luminaDecoSrc}
        caseImageAlt="Светильник"
      />
      <Case
        header="Разработка сайта ветеринарной клиники"
        description="Небольшая ветеринарная клинка. Смотровой кабинет, операционная,
                мини-аптека, вольеры для содержания животных после операции. Внутренний двор
                обустроен для выгула и содержания животных."
        link="#"
        caseImageSrc={veterinaryClinicSrc}
        caseImageAlt="Кот обнимается с собакой"
      />
      <Case
        header="Корпоративный сайт для юридической компании"
        description="Легальная формула - юридическая компания успешных профессионалов,
                объединивших лучшие компетенции для эффективного достижения поставленных целей."
        link="#"
        caseImageSrc={lawFirmSrc}
        caseImageAlt="Шахматная доска"
      />
      <Case
        header="SMM-продвижение интернет-магазина итальянской обуви “Robinani”"
        description="Продажа дизайнерской обуви из Италии, так же в ассортименте есть
                фирменные сумки и аксессуары."
        link="#"
        caseImageSrc={robinaniSrc}
        caseImageAlt="Женские ноги в босоножках на каблуке"
      />
      <button className={styles.button}>Посмотреть все работы →</button>
    </section>
  );
}

export { Cases };
