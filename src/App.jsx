import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import Itemcount from './itemcount/itemcount';
import ItemListContainer from './itemListContainer/itemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
}

  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/producto/:idProducto' element= {<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>}/>
        <Route path='/detalle/:idProducto' element= {<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      {<div>
      <Itemcount initial={1} stock={10} onAdd={onAdd}/>
      </div>}
      <div>
        <ItemDetailContainer/>    
      </div>
    <ItemListContainer greeting="Si gana BOCA 50% de descuento"/>
    </div>
    
  );
}

export default App;
