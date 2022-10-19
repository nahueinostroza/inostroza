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
            <img src={producto.thumbnail} alt="Imagen de Item"/>
            <p>Yo paro en de la 12, la hinchada mas loca,que va a todas partes siguiendo a BOCA.</p>
            <Itemcount onAdd={onAdd}/>
        </div>
    )

}

    export default ItemDetail;
