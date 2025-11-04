import { Step1Imperative } from "./Step1Imperative.js";
import { Step2CreateElement } from "./Step2CreateElement.jsx";
import { Step3JSX } from "./Step3JSX.jsx";

export const Demo1 = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <h2>Demo 1 – De lo imperativo a lo declarativo</h2>

      <section>
        <h3>Paso 1 – Imperativo</h3>
        <div id="imperative-root"></div>
        {/* <Step1Imperative /> */}
        <small>Generado con JS nativo</small>
      </section>

      <section>
        <h3>Paso 2 – React.createElement</h3>
        <Step2CreateElement />
      </section>

      <section>
        <h3>Paso 3 – JSX</h3>
        <Step3JSX >
          </Step3JSX>
      </section>
    </div>
  );
};
