import { Case } from '../case/case';

import styles from './cases.module.css';
import cleanLineSrc from './clean-line.png';
import luminaDecoSrc from './lumina-deco.png';
import veterinaryClinicSrc from './veterinary-clinic.png';
import lawFirmSrc from './law-firm.png';
import robinaniSrc from './robinani.png';
import mobileCleanLineSrc from './mobile-clean-line.png';
import mobileLuminaDecoSrc from './mobile-lumina-deco.png';
import mobileVeterinaryClinicSrc from './mobile-veterinary-clinic.png';
import mobileLawFirmSrc from './mobile-law-firm.png';
import mobileRobinaniSrc from './mobile-robinani.png';

function Cases({ isMobile }) {
    return (
        <section className={styles.cases}>
            <h2 className={styles.header}>Кейсы</h2>
            <Case
                header={'Логотип для фабрики\nмороженого «Чистая Линия»'}
                description="Чистая Линия - производитель мороженого №1 в России. Компанию ценят за
                эталонный вкус и самое главное - это использование только натуральных ингредиентов
                без ГМО."
                link="#"
                caseImageSrc={cleanLineSrc}
                mobileCaseImageSrc={mobileCleanLineSrc}
                caseImageAlt="Мороженное Лакомка"
                isMobile={isMobile}
            />
            <Case
                header="Интернет-магазин светильников Lumina Deco"
                description="Lumina Deco - крупный польский производитель осветительного
                оборудования. Компания представлена в Польше, Италии и России."
                link="#"
                caseImageSrc={luminaDecoSrc}
                mobileCaseImageSrc={mobileLuminaDecoSrc}
                caseImageAlt="Светильник"
                isMobile={isMobile}
            />
            <Case
                header="Разработка сайта ветеринарной клиники"
                description="Небольшая ветеринарная клинка. Смотровой кабинет, операционная,
                мини-аптека, вольеры для содержания животных после операции. Внутренний двор
                обустроен для выгула и содержания животных."
                link="#"
                caseImageSrc={veterinaryClinicSrc}
                mobileCaseImageSrc={mobileVeterinaryClinicSrc}
                caseImageAlt="Кот обнимается с собакой"
                isMobile={isMobile}
            />
            <Case
                header="Корпоративный сайт для юридической компании"
                description="Легальная формула - юридическая компания успешных профессионалов,
                объединивших лучшие компетенции для эффективного достижения поставленных целей."
                link="#"
                caseImageSrc={lawFirmSrc}
                mobileCaseImageSrc={mobileLawFirmSrc}
                caseImageAlt="Шахматная доска"
                isMobile={isMobile}
            />
            <Case
                header="SMM-продвижение интернет-магазина итальянской обуви “Robinani”"
                description="Продажа дизайнерской обуви из Италии, так же в ассортименте есть
                фирменные сумки и аксессуары."
                link="#"
                caseImageSrc={robinaniSrc}
                mobileCaseImageSrc={mobileRobinaniSrc}
                caseImageAlt="Женские ноги в босоножках на каблуке"
                isMobile={isMobile}
            />
            <button className={styles.button}>Посмотреть все работы →</button>
        </section>
    );
}

export { Cases };
