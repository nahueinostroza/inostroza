import { useEffect } from "react";
import { useState } from 'react';
import ItemContainer from './ItemContainer'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListCategory = ({setCarrito, carrito}) => {
    const [productos, setProductos] = useState ([])
    const {idCategoria} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const q = query(collection (db, "items"), where("categoryId", "==", `${idCategoria}`));
        getDocs(q).then((snapshot) => {
            const docs = (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setProductos(docs)
        });
    },[{idCategoria}])

    return (
        <ItemContainer productos={productos} setCarrito={setCarrito} carrito={carrito}/>
        
    )
}


export default ItemListCategory