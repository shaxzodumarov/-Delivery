import { Link, useLocation } from "react-router-dom";

const FoodCard = (props) => {
  const { img, name, price, id } = props.item;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Link style={{textDecoration:"none"}} to={`foods/${id}`}>
      <div className="Card">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="icons-star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <h5>{name}</h5>
      <div className="plus">
        <p className="price">
          <i class="fa-solid fa-dollar-sign"></i>
          {price}
        </p>
        <button className="btn">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="position">
        <div className="Discount">
          <p>15% Off</p>
        </div>
        {currentPath === "/favourite" ? (
          <i class="fa-solid fa-trash"></i>
        ) : (
          <i class="fa-solid fa-heart"></i>
        )}
      </div>
    </div>
    </Link>
  );
};

export default FoodCard;
