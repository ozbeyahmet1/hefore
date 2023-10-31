import Button from "@/components/ui/button";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { PropsWithSectionType } from "@/types/homepage";
import Image from "next/image";
import { useEffect } from "react";

export default function Banner2({ data: { buttons, image, headline, content } }: PropsWithSectionType) {
  const [isIntersecting, ref] = useIntersectionObserver("banner2_block", 0.4);
  useEffect(() => {
    const targetElement = document.getElementsByClassName("banner2_content");
    if (isIntersecting) {
      targetElement[0].classList.remove("d-none");
      targetElement[0].classList.add("fade-in");
    }
  }, [isIntersecting]);
  return (
    <section className="banner2">
      <h1 className="banner2_headline">{headline}</h1>
      <div className="banner2_block" ref={ref}>
        {image && <Image src={image.src} alt={image.alt} width={700} height={440} className="banner2_image" />}
        <div className="banner2--right">
          <p className="banner2_content d-none">{content}</p>
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