import Button from "@/components/ui/button";
import { PropsWithSectionType } from "@/helpers/types";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { useEffect } from "react";

export default function Banner4({ data: { buttons, image, headline, content } }: PropsWithSectionType) {
  const [isIntersecting, ref] = useIntersectionObserver("banner4_block", 0.4);
  useEffect(() => {
    const targetElement = document.getElementById("banner4_content") as HTMLElement;
    if (isIntersecting) {
      targetElement.style.opacity = "1";
      targetElement.classList.add("slideDown");
    }
  }, [isIntersecting]);
  return (
    <section className="banner4">
      <h1 className="banner4_headline">{headline}</h1>
      <div className="banner4_block" ref={ref}>
        {image && <Image src={image.src} alt={image.alt} width={350} height={700} className="banner4_image" />}
        <div className="banner4--right">
          <p className="banner4_content" id="banner4_content">
            {content}
          </p>
          {buttons?.map((item, key) => {
            return (
              <Button key={key} className={item.variant} as="a" href={item.href}>
                {item.text}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
