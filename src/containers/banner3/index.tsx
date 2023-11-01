import Button from "@/components/ui/button";
import { PropsWithSectionType } from "@/helpers/types";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { useEffect } from "react";

export default function Banner3({ data: { buttons, image, headline, content } }: PropsWithSectionType) {
  const [isIntersecting, ref] = useIntersectionObserver("banner3_container", 0.4);
  useEffect(() => {
    const targetElement = document.getElementById("banner3_content") as HTMLElement;
    if (isIntersecting) {
      targetElement.style.opacity = "1";
      targetElement.classList.add("slideDown");
    }
  }, [isIntersecting]);
  return (
    <section className="banner3">
      <h1 className="banner3_headline">{headline}</h1>
      <div className="banner3_container" ref={ref}>
        <div className="banner3--left">
          <p className="banner3_content" id="banner3_content">
            {content}
          </p>
          {buttons?.map((button, key) => {
            return (
              <Button key={key} className={button.variant} as="a" href={button.href}>
                {button.text}
              </Button>
            );
          })}
        </div>
        {image && <Image src={image.src} alt={image.alt} width={660} height={580} className="banner3_image" />}
      </div>
    </section>
  );
}
