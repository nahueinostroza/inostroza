import { useCarritoContext } from "../contex/CarritoContext";
import Itemcount from "../itemcount/itemcount";



const ItemDetail = ({producto}) => {
    const {addProducto} = useCarritoContext();

    const onAdd = (quantity) => {
        addProducto(producto, quantity);
    }

    return (
        <div>
            <h1>{producto.title}</h1>
            <h2>${producto.price}</h2>
            <img src={producto.imageID} alt="Imagen de Item"/>
            <p>{producto.description}</p>
            <Itemcount onAdd={onAdd}/>
        </div>
    )

}

    export default ItemDetail;
