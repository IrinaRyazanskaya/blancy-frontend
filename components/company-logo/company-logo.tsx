import cn from "classnames";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import styles from "./company-logo.module.css";

type CompanyLogoProps = {
  logoSrc: StaticImageData | string;
  logoAlt: string;
  width: number;
  height: number;
  className?: string;
};

const CompanyLogo = ({ logoSrc, logoAlt, width, height, className }: CompanyLogoProps) => {
  return (
    <div className={cn(styles.logoWrap, className)}>
      <Image
        className={styles.logo}
        src={logoSrc}
        alt={logoAlt}
        width={width}
        height={height}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 767px) 45vw, (max-width: 1200px) 180px, 229px"
      />
    </div>
  );
};

export { CompanyLogo };
