import Button from "@/components/ui/button";
import { PropsWithSectionType, responsiveBreakpoints } from "@/helpers/types";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useWindowScreen from "@/hooks/useWindowScreen";
import Image from "next/image";
import { useEffect } from "react";

interface BannerProps {
  data: PropsWithSectionType;
  flexDirection: "row" | "reverse";
}
export default function BannerX({
  data: {
    data: { buttons, content, headline, image, slogan },
  },
  flexDirection,
}: BannerProps) {
  const [isIntersecting, ref] = useIntersectionObserver("bannerX_content", 0.3);
  useEffect(() => {
    if (isIntersecting && ref.current) {
      ref.current.classList.add("slideDown");
      ref.current.style.opacity = "1";
    }
  }, [isIntersecting, ref]);

  const { width, height } = useWindowScreen();

  function imageDataSet(): { width: number; height: number } {
    if (image?.dataSet) {
      if (width < responsiveBreakpoints.sm) {
        return { width: image?.dataSet[0].width, height: image?.dataSet[0].height };
      }
      if (width < responsiveBreakpoints.md) {
        return { width: image?.dataSet[1].width, height: image?.dataSet[1].height };
      }
      if (width < responsiveBreakpoints.lg) {
        return { width: image?.dataSet[2].width, height: image?.dataSet[2].height };
      }
      if (width < responsiveBreakpoints.xl) {
        return { width: image?.dataSet[3].width, height: image?.dataSet[3].height };
      }
      if (width < responsiveBreakpoints.xxl) {
        return { width: image?.dataSet[4].width, height: image?.dataSet[4].height };
      }
      if (width > responsiveBreakpoints.xxl) {
        return { width: image?.dataSet[5].width, height: image?.dataSet[5].height };
      } else return { width: image?.dataSet[4].width, height: image?.dataSet[4].height };
    }
    return { width: 0, height: 0 };
  }

  return (
    <section className="bannerX">
      <h1 className="bannerX_headline">{headline}</h1>
      <div
        className={
          flexDirection == "row" ? "bannerX_block bannerX_block--row" : "bannerX_block bannerX_block--reverse"
        }>
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={imageDataSet().width ? imageDataSet().width : 0}
            height={imageDataSet().height ? imageDataSet().height : 0}
          />
        )}
        <div className="bannerX--right">
          <p className="bannerX_content" id="bannerX_content" ref={ref}>
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
