import cn from "classnames";
import Link from "next/link";
import { ArticleCard } from "../article-card/article-card";

import firstArticleSrc from "./first-article.png";
import secondArticleSrc from "./second-article.png";
import thirdArticleSrc from "./third-article.png";
import styles from "./articles.module.css";

function Articles({ title, linkText, className }) {
  return (
    <section className={cn(styles.articles, className)}>
      <h2 className={styles.header}>{title}</h2>
      <div className={styles.cards}>
        <ArticleCard
          href="#"
          articleImageSrc={firstArticleSrc}
          articleImageAlt="Телефон на фоне стены"
          width={380}
          height={220}
          category="Советы"
          title="10 советов для ведения социальных сетей"
          readingTime="8 минут"
          date="2021-10-22T16:51:05.767Z"
        />
        <ArticleCard
          href="#"
          articleImageSrc={secondArticleSrc}
          articleImageAlt="Телефон на фоне компьютера"
          width={380}
          height={220}
          category="Технологии"
          title="Чем важна мобильная версия сайта в 2021?"
          readingTime="6 минут"
          date="2021-10-22T16:51:05.767Z"
        />
        <ArticleCard
          href="#"
          articleImageSrc={thirdArticleSrc}
          articleImageAlt="Телефон в руке"
          width={380}
          height={220}
          category="Лайфхак"
          title="Создание продающего поста в Instagram - Лайфхак"
          readingTime="4 минуты"
          date="2021-10-22T16:51:05.767Z"
        />
      </div>
      {linkText ? (
        <Link href="#" passHref={true}>
          <a className={styles.allArticles}>
            <span className={styles.linkText}>{linkText}</span>
          </a>
        </Link>
      ) : null}
    </section>
  );
}

export { Articles };
