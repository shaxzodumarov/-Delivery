import FoodCard from "../components/SubComponents/FoodCard";
import Food from "../Data/Food";
import { useEffect, useState } from "react";

const Favourite = () => {
  const [foods, setFoods] = useState(Food);

  useEffect(() => {
    setFoods(foods);
  }, []);

  return (
    <div className="foods py-2 d-flex align-items-start">
      {foods.map((item, index) => (
        <FoodCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Favourite;

// const Favourite = () => {
//     return (
//         <div className="Favourite">
//             {}
//             <div className="Card">
//                 <div className="img">
//                     <img src="https://api.prounity.uz/food-delivery/media/foods/pizza-pizza-pizza-with-transparent-background-ai-generated-free-png_nHUljdB.webp" alt="" />
//                 </div>
//                 <div className="icons-star">
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                     <i class="fa-solid fa-star"></i>
//                 </div>
//                 <h5>Pizza</h5>
//                 <div className="plus">
//                     <p className="price"><i class="fa-solid fa-dollar-sign"></i>70000</p>
//                     <button className="btn">
//                         <i class="fa-solid fa-plus"></i>
//                     </button>
//                 </div>
//                 <div className="position">
//                     <div className="Discount">
//                         <p>15% Off</p>
//                     </div>
//                     <i class="fa-solid fa-trash"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Favourite
