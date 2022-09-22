import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const camiseta = { id:1, img: "https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/H/E/HE6338_camiseta-color-azul-adidas-boca-2022-2023_1_completa-frontal.jpg", title:"CAMISETA TITULAR OFICIAL BOCA JUNIORS 22/23"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(camiseta);
            },3000);
        });

            getData.then(res => setData(res));
            },[])
            
            return (
            <ItemDetail data={data}/>
            );
        }


export default ItemDetailContainer;