import { useCarritoContext } from "../../contex/CarritoContext"

const ItemCart = ({producto}) => {
    const {removerProducto} = useCarritoContext()
    return (
        <div>
            <img src={producto.thumbnail} style={{width:"150px"}}/>
            <h3>Titulo: {producto.title}</h3>
            <h3>Precio: ${producto.price}</h3>
            <h3>Cantidad: {producto.quantity}</h3> 
            <h3>Subtotal: ${producto.price * producto.quantity} </h3>    
            <button onClick={()=>removerProducto(producto.id)}>Eliminar producto</button>    
            
        </div>
    )
}

export default ItemCart