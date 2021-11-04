import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { MobileMenu } from '../mobile-menu';

import styles from './mobile-header.module.css';
import mobileLogoSrc from './mobile-logo.svg';

function MobileHeader() {
    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <Link href="#" passHref={true}>
                    <a className={styles.home}>
                        <Image
                            className={styles.logo}
                            src={mobileLogoSrc}
                            alt="blancy"
                            width={123}
                            height={29}
                        />
                    </a>
                </Link>
                <div className={styles.burgerMenu}>
                    <input
                        className={styles.toggle}
                        type="checkbox"
                        id="menu-toggle"
                        name="menu-toggle"
                    />
                    <label className={styles.button} htmlFor="menu-toggle">
                        <div className={cn(styles.burgerItem, styles.firstItem)}></div>
                        <div className={cn(styles.burgerItem, styles.secondItem)}></div>
                        <div className={cn(styles.burgerItem, styles.thirdItem)}></div>
                    </label>
                </div>
            </header>
            <MobileMenu />
        </div>
    );
}

export { MobileHeader };
