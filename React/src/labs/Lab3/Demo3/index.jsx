import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function PageA() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (true) navigate('/pageb');
  }


  return <button onClick={() => navigate('/pageb')}>Ir a Page B</button>;
}

function PageB() {
  return <h1>Page B</h1>;
}

export default function Demo3() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/pageb" element={<PageB />} />
      </Routes>
    </BrowserRouter>
  );
}
