const Item = ({productos, setCarrito, carrito}) => {
    return(
    <div>
        <h3>{productos.title}</h3>
        <img src={productos.thumbnail} alt=""/>
        
<div>
<button onClick={() => {
    setCarrito([...carrito,productos]);
    console.log(carrito);
    }}>
        agregar Producto
        </button>
        </div>
        </div>
        )
}

export default Item;

