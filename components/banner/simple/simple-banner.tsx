import Link from "next/link";
import type { ReactNode } from "react";

type BreadCrumb = {
  title: string;
  href: string;
};

type SimpleBannerProps = {
  header: string;
  className?: string;
  breadCrumbs: BreadCrumb[];
};

const SimpleBanner = ({ header, className, breadCrumbs }: SimpleBannerProps) => {
  const breadCrumbElements: ReactNode[] = [];

  for (let i = 0; i < breadCrumbs.length; i++) {
    const breadCrumb = breadCrumbs[i];

    breadCrumbElements.push(
      <li key={breadCrumb.title}>
        <Link href={breadCrumb.href}>{breadCrumb.title}</Link>
      </li>,
    );

    if (i !== breadCrumbs.length - 1) {
      breadCrumbElements.push(<span key={`${breadCrumb.title}-separator`}>/</span>);
    }
  }

  return (
    <div className={className}>
      <ul>{breadCrumbElements}</ul>
      <h1>{header}</h1>
    </div>
  );
};

export { SimpleBanner };
