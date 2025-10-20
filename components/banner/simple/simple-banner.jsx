import cn from "classnames";
import Link from "next/link";

import styles from "./simple-banner.module.css";

function SimpleBanner({ breadCrumbs, header, className }) {
  const breadCrumbElements = [];

  for (let i = 0; i < breadCrumbs.length; i++) {
    const breadCrumb = breadCrumbs[i];

    breadCrumbElements.push(
      <li key={breadCrumb.title} className={styles.breadCrumb}>
        <Link href={breadCrumb.href} className={styles.link}>
          {breadCrumb.title}
        </Link>
      </li>,
    );

    if (i !== breadCrumbs.length - 1) {
      breadCrumbElements.push(<span key={`${breadCrumb.title}-separator`}>/</span>);
    }
  }

  return (
    <div className={cn(styles.banner, className)}>
      <ul className={styles.links}>{breadCrumbElements}</ul>
      <h1 className={styles.header}>{header}</h1>
    </div>
  );
}

export { SimpleBanner };
