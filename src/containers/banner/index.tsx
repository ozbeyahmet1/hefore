import Button from "@/components/ui/button";
import { PropsWithSectionType } from "@/helpers/types";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { useEffect } from "react";

export default function Banner({ data: { buttons, image, slogan } }: PropsWithSectionType) {
  const [isIntersecting, ref] = useIntersectionObserver("banner_slogan", 0.2);
  useEffect(() => {
    const target = document.getElementById("banner_slogan") as HTMLElement;
    if (isIntersecting) {
      target.classList.add("slideIn");
      target.style.opacity = "1";
    }
  }, [isIntersecting]);
  return (
    <section className="banner">
      <div>
        <h1 className="banner_slogan" id="banner_slogan" ref={ref}>
          {slogan}
        </h1>
        <div className="banner_buttonWrapper">
          {buttons?.map((button, key) => {
            return (
              <Button key={key} className={button.variant} as="a" href={button.href}>
                {button.text}
              </Button>
            );
          })}
        </div>
      </div>
      {image && <Image src={image.src} width={650} height={400} alt={image.alt} className="banner_image" />}
    </section>
  );
}
