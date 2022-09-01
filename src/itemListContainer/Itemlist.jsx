import Item from "./Item"

const Itemlist = ({productos}) => {
    {productos.map((productos) =>{
        return(
        <Item title={productos.title} thumbnail={productos.thumbnail}/> 
        );
    })}}

    export default Itemlist;

    
    