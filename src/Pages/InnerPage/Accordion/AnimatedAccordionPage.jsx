import Accordion from "./Accordion";

export default function AnimatedAccordionPage() {
  //  All Faqs and  answers.
  const faqs = [
    {
      title: "What lease options are available at ADYTON Mykonos?",
      text: "We offer two premium options: a 6-month seasonal lease and a full annual lease. Both include utilities, pool and garden maintenance, and technical support.",
      active: false,
    },

    {
      title: "What is included in the lease price?",
      text: "Electricity, water, garden care, pool maintenance, and property technical support are included. Additional concierge services are available on request.",
      active: false,
    },

    {
      title: "Who is this property suitable for?",
      text: "ADYTON is ideal for executives, entrepreneurs, diplomats, international families, and long-stay luxury clientele seeking privacy and security.",
      active: false,
    },

    {
      title: "How many suites and pools does the compound have?",
      text: "The compound includes multiple luxury suites and villas, with private pools for most units and one main communal pool for the property.",
      active: false,
    },

    {
      title: "Do you provide high-speed internet and parking?",
      text: "Yes. High-speed Wi-Fi is available throughout the property, and private on-site parking is available for residents and guests.",
      active: false,
    },

    {
      title: "Where is ADYTON located in Mykonos?",
      text: "ADYTON is in Ano Mera, with quick access to Kaló Livadi beach, Mykonos airport, and Mykonos Town, while maintaining a private and quiet setting.",
      active: false,
    },

    {
      title: "Can extra services be arranged?",
      text: "Yes. Upon request, we can arrange private security, chauffeur services, private chef, beauty services, and VIP concierge support.",
      active: false,
    },

    {
      title: "How do I submit a serious inquiry?",
      text: "Use the contact or inquiry section on the website and share your preferred lease period and profile. Confidential negotiations are available.",
      active: false,
    },
  ];

  return (
    <main className="relative flex flex-col justify-center  overflow-hidden">
      <div className="w-full mx-auto px-4 md:px-6 ">
        <div
          className=" grid items-end grid-cols-1 lg:grid-cols-2  gap-x-[30px]"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text}
            </Accordion>
          ))}
        </div>
      </div>
    </main>
  );
}
