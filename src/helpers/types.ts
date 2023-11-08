export interface Section {
  id: string;
  slogan?: string;
  headline?: string;
  buttons?: Array<Button>;
  image?: Image;
  content?: string;
}

export interface Button {
  id: number;
  text: string;
  href: string;
  variant: string;
}

export interface Image {
  src: string;
  alt: string;
  dataSet?: Array<{ width: number; height: number; screen: number }>;
  height?: Array<{ value: number; screen: number }>;
}

export interface Homepage {
  [k: string]: Section;
}

export type PropsWithSectionType<P = unknown> = P & { data: Section };

export interface Nft {
  headline: string;
  imageSrc: string;
  creator: Creator;
  price: number;
}

export interface Creator {
  name: string;
  imageSrc: string;
}
type ResponsiveBreakpoints = {
  [k: string]: number;
};

export const responsiveBreakpoints: ResponsiveBreakpoints = {
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
  xxl: 1600,
};
