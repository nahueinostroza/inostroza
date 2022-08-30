import './App.css';
import NavBar from './components/Navbar';
import Itemcount from './itemcount/itemcount';
import ItemListContainer from './itemListContainer/itemListContainer';


function App() {
  const onAdd = (quantity) => {
    console.log(`comprate ${quantity} unidades`);
}

  return (
    <div className="App">
      <NavBar/>
      <div>
      <Itemcount initial={1} stock={10} onAdd={onAdd}/>
      </div>
      
    <ItemListContainer greeting="Si gana BOCA 50% de descuento"/>
    </div>


  );
}

export default App;
