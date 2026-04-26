import { productos } from './Components/producto';
import ListaProductos from './Components/ListaProductos';
import './App.css'

function App() {
 

 

  return (
    <>
      <main>
      <h1 className="font-bold text-3xl mt-6 text-center">Supermercado el ahorro</h1>
      <ListaProductos
          productos= {productos}
        />
        </main>
    </>
  );
}

export default App
