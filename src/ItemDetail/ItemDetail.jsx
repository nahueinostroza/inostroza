import { data } from "autoprefixer"
import Itemcount from "../itemcount/itemcount";

export const ItemDetail = () => {
    return ( 
        <div className="container">
        <div className="detail">
        <img className="detail_image" src= {data.img} alt=""/>
        <h1>{data.title}</h1>
       {/*  <div>
            <Itemcount/>
        </div> */}
        </div>
        </div>
    );
    }

    export default ItemDetail;
