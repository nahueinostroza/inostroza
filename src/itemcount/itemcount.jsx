import { useEffect, useState } from "react"
import { createPortal } from "react-dom";



const Itemcount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial)); 

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className="style">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>

        </div>
    );
    
}

export default Itemcount