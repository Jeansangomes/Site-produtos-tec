import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Produtos from './Componets/Produtos';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Contato from './Contato';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
