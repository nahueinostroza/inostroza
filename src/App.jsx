import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './itemListContainer/itemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import CarritoProvider from './contex/CarritoContext';
import Cart from './components/Navbar/Cart';

function App() {
  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
}

  return (
    
    <div className="App">
      <BrowserRouter>
      <CarritoProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>}/>
        <Route path='/producto/:idProduct' element= {<ItemDetailContainer/>}/>
        <Route path='/carrito' element= {<Cart/>}/>
      </Routes>
      </CarritoProvider>
      </BrowserRouter>
      </div>
  );
}

export default App;
