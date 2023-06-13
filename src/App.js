import '../src/index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Miapi from "./Components/MiApi/Miapi.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [dataNav, setDataNav] = useState([]);
  const [dataFiltrada, setDataFiltrada] = useState([]);

  const handleFilteredData = (filteredData) => {
    setDataFiltrada(filteredData);
  };
  const handleLoadedData = (e) => {
    setDataNav(e);
  };

  return (
    <div className='App'>
      <Nav onFilter={handleFilteredData} dataNav={dataNav} />
      <Miapi onLoadData={handleLoadedData} dataFiltrada={dataFiltrada}/>
      <Footer />
    </div>
  );
}

export default App;
