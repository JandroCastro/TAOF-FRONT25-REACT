import { useContext } from "react";
import { AccordionContext } from "./Accordion";

export default function AccordionPanel({ children, index }) {
  const { activeIndex } = useContext(AccordionContext);
  const isOpen = activeIndex === index;

  return isOpen ? (
    <div className="accordion-panel">{children}</div>
  ) : null;
}
