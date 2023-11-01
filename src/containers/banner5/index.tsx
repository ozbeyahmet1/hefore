import Button from "@/components/ui/button";
import { PropsWithSectionType } from "@/types/homepage";

export default function Banner5({ data: { buttons, headline } }: PropsWithSectionType) {
  return (
    <section className="banner5">
      <h1 className="banner5_headline">{headline}</h1>
      {buttons?.map((item, key) => {
        return (
          <Button key={key} className={item.variant} as="a" href={item.href}>
            {item.text}
          </Button>
        );
      })}
    </section>
  );
}
