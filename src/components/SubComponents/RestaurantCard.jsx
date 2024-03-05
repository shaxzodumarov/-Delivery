import { Link, useLocation } from "react-router-dom";

const RestaurantCard = (props) => {
    const { img, name, id } = props.item;
    const location = useLocation();
    const currentPath = location.pathname;
    return (
      <Link style={{textDecoration:"none",color:"black"}} to={`/restaurant-about/${id}`}>
        <div className="card-Restaurant" >
          <img  
          className="img-Restaurant"
            src={img}
            alt=""
          />
          <p style={{textDecoration:"none"}}>{name}</p>
        </div>
      </Link>
  );
};

export default RestaurantCard