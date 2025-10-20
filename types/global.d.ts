declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.png" {
  const content: import("next/image").StaticImageData | string;
  export default content;
}

declare module "*.jpg" {
  const content: import("next/image").StaticImageData | string;
  export default content;
}

declare module "*.jpeg" {
  const content: import("next/image").StaticImageData | string;
  export default content;
}

declare module "*.webp" {
  const content: import("next/image").StaticImageData | string;
  export default content;
}

declare module "*.svg" {
  const content: import("next/image").StaticImageData | string;
  export default content;
}
