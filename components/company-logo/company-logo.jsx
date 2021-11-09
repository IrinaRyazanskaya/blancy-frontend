import Image from 'next/image';

import styles from './company-logo.module.css';

function CompanyLogo({ logoSrc, logoAlt, width, height }) {
    return (
        <div className={styles.logoWrap}>
            <Image
                className={styles.logo}
                src={logoSrc}
                alt={logoAlt}
                width={width}
                height={height}
            />
        </div>
    );
}

export { CompanyLogo };
