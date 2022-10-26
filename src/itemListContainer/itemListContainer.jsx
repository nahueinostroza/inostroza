import { useEffect, useState } from "react"
import ItemContainer from "./ItemContainer"
import { collection, getDocs, getFirestore} from "firebase/firestore";


const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = (snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
            setProductos(docs)
        });
    },[productos])


    return (
        <div>
        <ItemContainer productos={productos}/>
        </div>
    )}

export default ItemListContainer