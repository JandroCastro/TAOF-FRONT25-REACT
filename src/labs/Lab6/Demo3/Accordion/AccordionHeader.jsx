import { useContext } from "react";
import { AccordionContext } from "./Accordion";

export default function AccordionHeader({ children, index }) {
  const { toggle } = useContext(AccordionContext);
  console.log("🚀 ~ AccordionHeader ~ index:", index)

  return (
    <button className="accordion-header" onClick={() => {
      return toggle(index);
    }}>
      {children}
    </button>
  );
}
