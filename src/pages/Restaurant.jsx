import { useEffect, useState } from "react";
import RestaurantCard from "../components/SubComponents/RestaurantCard";
import Restaurants from "../Data/Restaurant";
import { Link } from "react-router-dom";

const Restaurant = () => {
    const [restaurants, setRestaurant] = useState(Restaurants);
    
    useEffect(() => {
        setRestaurant(Restaurants);
    }, []); 

    return (
        <div className="Restaurant py-2 d-flex align-items-start">
                <h2>Restaurant</h2>
                <Link to={"/restaurant-about"} style={{textDecoration:"none"}}>
                    <div className="cards-Restaurant py-2 d-flex align-items-start">
                        {restaurants.map((item, index) => (
                          <RestaurantCard item={item} />
                        ))}
                    </div>
                </Link>
            </div>
    )
}

export default Restaurant