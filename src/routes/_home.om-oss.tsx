import { getOmOss } from "@/api/om-oss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getAssistantFaqs, getTeamFaqs } from "~/api/faq";
import { Divider } from "~/components/divider";
import { TextPictureParagraph } from "~/components/text-picture-paragraph";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function OmOss() {
  const { title, ingress, bottomText, bottomHeader, bottomImage, cards } =
    getOmOss();
  const assistantFaqs = getAssistantFaqs();
  const teamFaqs = getTeamFaqs();

  return (
    <div className="mt-20 mb-20 flex max-w-4xl flex-col items-center gap-10 self-center p-5 md:gap-28 dark:text-text-dark">
      <div className="flex max-w-full flex-col gap-3 md:gap-5">
        <h1 className="max-w-3xl text-center font-bold text-2xl text-vektor-DARKblue md:text-4xl dark:text-text-dark">
          {title}
        </h1>
        <p className="max-w-3xl text-md md:text-lg">{ingress}</p>
        <Divider />
      </div>
      {cards.map((card, index) => (
        <TextPictureParagraph
          key={card.title}
          title={card.title}
          text={card.text}
          image={card.image}
          pictureOnLeft={index % 2 === 0}
        />
      ))}
      <div className="flex w-full flex-col gap-3 md:gap-5">
        <h2 className="text-center font-bold text-2xl text-vektor-DARKblue md:text-4xl dark:text-text-dark">
          {bottomHeader}
        </h2>
        <p className="text-md md:text-lg">{bottomText}</p>
        <img
          className="mt-0"
          alt={bottomImage.alt}
          src={bottomImage.url.toString()}
        />
        <Divider />
      </div>
      <div className="flex w-full flex-col gap-10">
        <h2 className="w-full text-center font-bold text-2xl text-vektor-DARKblue md:text-4xl dark:text-text-dark">
          Ofte stilte spørsmål og svar
        </h2>

        {/* FAQ Section */}
        <div className="flex w-full flex-col items-center">
          <h3 className="text-2xl text-vektor-DARKblue dark:text-gray-200">
            Assistent
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {assistantFaqs.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger>
                  <p className="text-left">{question}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-left">{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Divider />
          <h3 className="mb-3 text-2xl text-vektor-DARKblue dark:text-gray-200">
            Team
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {teamFaqs.map(({ question, answer }) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger>
                  <p className="text-left">{question}</p>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-left">{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
