import Restaurant from "../Data/Restaurant";
import { useState } from "react";
import { useParams } from "react-router-dom";

function RestaurantAbout () {
    const {id} = useParams()
    const data = Restaurant.filter(i=>i.id==id)
    const [restaurant, setRestaurant] = useState(data[0])
    console.log(id);
    return(
        <div style={{width:"100%"}}>
            <h3 style={{marginLeft:"300px"}}>About Lacafe</h3>
            <div className="body-main w-100 py-5 px-2" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div className="order-history" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div className="img-order-history p-3">
                        <img className="img-restaurant" style={{width:"350px"}} src={restaurant.img} alt=""/>
                    </div>
                    <div className="title-order-history">
                        <ul className="list-group" style={{width:"350px"}}>
                            <li className="list-group-item">Name : {restaurant.name}</li>
                            <li className="list-group-item">Description : Romantic Cafe</li>
                            <li className="list-group-item">Open time : 09:00:00</li>
                            <li className="list-group-item">Close time : 22:00:00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}   
export default RestaurantAbout