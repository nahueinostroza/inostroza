const Item = ({producto, setCarrito, carrito}) => {
    return(
    <div>
        <h3>{producto.title}</h3>
        <img src={producto.thumbnail} alt=""/>
        
<div>
{/* <button onClick={() => {
    setCarrito([...carrito,productos]);
    console.log(carrito);
    }}>
        agregar Producto
        </button> */}
        </div>
        </div>
        )
}

export default Item;

