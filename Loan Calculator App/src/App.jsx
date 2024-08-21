import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';



function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);


  return (
    <>
          
      <Header titulo="Cotizador de prestamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
        />
      </div>
      <div className="mensaje">
        <Resultado
          total={total}
          cantidad={cantidad}
          plazo={plazo}
        />
      </div>
    </>

  )
}

export default App
