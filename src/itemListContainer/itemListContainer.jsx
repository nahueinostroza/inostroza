import { useEffect, useState } from "react"
import Itemlist from "./Itemlist" 
const ItemListContainer= ({greeting}) => {
    const [productos, setproductos] = useState([])

    const buscarProductos = async () => {
        try {
            const response = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=$`);
            const data = await response.json();
            setproductos(data.results);
        } catch(e){
            console.log(e);
        }
    }

useEffect(() => {
    buscarProductos();
    },[])
    return (
        <div>
        <p style={{color:"blue"}}>
        {greeting}
        </p>
        <Itemlist listaproductos={productos}/>
        </div>
    )}

export default ItemListContainer