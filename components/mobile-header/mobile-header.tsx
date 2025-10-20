import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MobileMenu } from "../mobile-menu";
import { BurgerButton } from "../burger-button";

import styles from "./mobile-header.module.css";
import mobileLogoSrc from "./mobile-logo.svg";

const MobileHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Link href="#" className={styles.home}>
          <Image className={styles.logo} src={mobileLogoSrc} alt="blancy" width={123} height={29} />
        </Link>
        <BurgerButton
          size={22}
          label="Menu"
          color="#E64592"
          isToggled={isMenuOpen}
          onToggle={handleMenuToggle}
        />
      </header>
      <MobileMenu isOpen={isMenuOpen} />
    </div>
  );
};

export { MobileHeader };
