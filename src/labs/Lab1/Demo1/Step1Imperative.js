export const Step1Imperative = () => {
  const root = document.getElementById("imperative-root");
  if (!root) return null;

  const container = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Hola mundo (Imperativo)";
  h1.style.color = "darkred";

  const p = document.createElement("p");
  p.textContent = "Generado con JS nativo, paso a paso.";

  container.appendChild(h1);
  container.appendChild(p);
  root.appendChild(container);

  return null;
};
