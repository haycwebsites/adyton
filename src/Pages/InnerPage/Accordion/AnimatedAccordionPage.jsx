import Accordion from "./Accordion";
import { useHayc } from "../../../hayc/config-context";

export default function AnimatedAccordionPage() {
  const { t, config, cp } = useHayc();
  const faqItems = config.faqConfig.items;

  return (
    <main className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6">
        <div
          className="grid items-end grid-cols-1 lg:grid-cols-2 gap-x-[30px]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {faqItems.map((faq, index) => (
            <Accordion
              key={index}
              title={t(faq.question)}
              id={`faqs-${index}`}
              active={false}
              cpPath={`faqConfig.items.${index}.question`}
            >
              <span {...cp(`faqConfig.items.${index}.answer`)}>{t(faq.answer)}</span>
            </Accordion>
          ))}
        </div>
      </div>
    </main>
  );
}
