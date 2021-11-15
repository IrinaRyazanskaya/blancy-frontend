import cn from 'classnames';
import Link from 'next/link';

import styles from './simple-banner.module.css';

function SimpleBanner({ breadCrumbs, header, className }) {
    const breadCrumbElements = [];

    for (let i = 0; i <= breadCrumbs.length; i++) {
        const breadCrumb = breadCrumbs[i];

        breadCrumbElements.push(
            <Link key={breadCrumb.title} href={breadCrumb.href} passHref={true}>
                <a className={styles.link}>
                    <li className={styles.breadCrumb}>{breadCrumb.title}</li>
                </a>
            </Link>,
        );

        if (i !== breadCrumbs.length - 1) {
            breadCrumbElements.push(<span>/</span>);
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
