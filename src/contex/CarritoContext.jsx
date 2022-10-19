import React,{useState, useContext} from 'react';

const CarritoContext = React.createContext([]);

export const useCarritoContext = () => useContext(CarritoContext)

const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const clearCarrito = () => setCarrito([]);

    const isInCart = (id) => carrito.find(producto => producto.id === id) ? true : false;

    const removerProducto = (id) => setCarrito(carrito.filter(producto => producto.id !== id));

    const addProducto = (item, newQuantity) => {
    const newCart = carrito.filter (prod => prod.id !== item.id);
    newCart.push({...item, quantity: newQuantity})
    setCarrito(newCart);
    console.log(carrito);
}

    const totalPrice = () => {
        return carrito.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    return(
        <CarritoContext.Provider value={{
            clearCarrito,isInCart,removerProducto, addProducto, carrito, totalPrice
        }}>
            {children}
        </CarritoContext.Provider>
    )

}

export default CarritoProvider