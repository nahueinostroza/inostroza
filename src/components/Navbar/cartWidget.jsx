import { Link } from "react-router-dom";

const CartWidget = () => {
return (
<Link to={`/carrito`}>
<i className="ri-shopping-cart-line"/>
</Link>
)};

export default CartWidget