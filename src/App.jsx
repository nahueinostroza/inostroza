import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './itemListContainer/itemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        
      </div>
    <ItemListContainer greeting="Si gana BOCA 50% de descuento"/>
    </div>
  );
}

export default App;
