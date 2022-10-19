import { useEffect, useState } from "react"
import ItemContainer from "./ItemContainer"


const ItemListContainer= ({greeting}) => {
    const [productos, setProductos] = useState ([])          
    const buscarProductos = async () => {          
    const response = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=camisetasbocajuniors%27') 
    const data = await response.json();   
    setProductos(data.results);      }        
    useEffect(() => {            
    buscarProductos() },[])


    return (
        <div>
        <p style={{color:"blue"}}>
        {greeting}
        </p>
        <ItemContainer productos={productos}/>
        </div>
    )}

export default ItemListContainer