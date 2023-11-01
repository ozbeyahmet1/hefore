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
}

export interface Homepage {
  [k: string]: Section;
}

export type PropsWithSectionType<P = unknown> = P & { data: Section };
