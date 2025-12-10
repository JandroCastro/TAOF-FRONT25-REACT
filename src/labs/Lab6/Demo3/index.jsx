import Accordion from "./Accordion/Accordion";
import AccordionHeader from "./Accordion/AccordionHeader";
import AccordionItem from "./Accordion/AccordionItem";
import AccordionPanel from "./Accordion/AccordionPanel";


export default function Demo3() {
  return (
    <>
      <h1>Demo 3 – Compound Components (Accordion)</h1>

      <Accordion>
        <AccordionItem>
          <AccordionHeader index={0}>Sección 1</AccordionHeader>
          <AccordionPanel index={0}>Contenido de la sección 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader index={1}>Sección 2</AccordionHeader>
          <AccordionPanel index={1}>Contenido de la sección 2</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader index={2}>Sección 3</AccordionHeader>
          <AccordionPanel index={2}>Contenido de la sección 3</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
