import { createContext, useState } from "react";
import './accordion.css'

export const AccordionContext = createContext();

export default function Accordion({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, toggle }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}
