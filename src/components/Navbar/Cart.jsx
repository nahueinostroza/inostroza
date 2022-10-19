import { useCarritoContext } from "../../contex/CarritoContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";


const Cart = () => {
    const {carrito, totalPrice} = useCarritoContext();

    if (carrito.length === 0){
    return(
        <><h2>No hay elementos en la compra</h2>
        <Link to='/'>Hacer compras</Link></>
    )
    }
    return (<div>
        <h1>Carrito</h1>
        <div>{carrito.map((producto) => <ItemCart key={producto.id} producto={producto}></ItemCart>)}</div>
        <h2>Total: ${totalPrice()}</h2>
        </div>
    );
    };
    
    export default Cart;