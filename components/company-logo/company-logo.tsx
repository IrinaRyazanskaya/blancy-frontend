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

const CompanyLogo = ({ logoSrc, logoAlt, width, height }: CompanyLogoProps) => {
  return (
    <div className={styles.logoWrap}>
      <Image className={styles.logo} src={logoSrc} alt={logoAlt} width={width} height={height} />
    </div>
  );
};

export { CompanyLogo };
