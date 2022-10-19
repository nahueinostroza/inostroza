import Item from "../components/Navbar/Item";

const ItemContainer = ({productos}) => {
    return(
    <div>
    {productos.map((producto) => <Item  key={producto.id} producto={producto}/>)}
    </div>
    
    )
}

export default ItemContainer;

