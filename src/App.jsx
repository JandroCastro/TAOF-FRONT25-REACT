import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Lab1 } from "./labs/Lab1/index.jsx";
import Lab2 from "./labs/Lab2/index.jsx";
import Lab3 from "./labs/Lab3/index.jsx";
import Lab4 from "./labs/Lab4/index.jsx";
import Lab5 from "./labs/Lab5/index.jsx";
import Lab6 from "./labs/Lab6/index.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Lab1 />} /> */}
        {/* <Route path="/" element={<Lab2 />} /> */}
        {/* <Route path="/" element={<Lab3 />} /> */}
        {/* <Route path="/" element={<Lab4 />} /> */}
        {/* <Route path="/" element={<Lab5 />} /> */}
        <Route path="/" element={<Lab6 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
