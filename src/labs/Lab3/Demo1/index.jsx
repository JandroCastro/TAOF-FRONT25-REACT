import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}
function About() {
  return <h1>About</h1>;
}
function NotFound() {
  return (
    <h1>
      <Link to={"/"}> 404 Not Found</Link>Espabila
    </h1>
  );
}

export default function Demo1() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
