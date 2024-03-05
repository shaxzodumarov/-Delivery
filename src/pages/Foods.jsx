import Food from "../Data/Food";
import { useEffect, useState } from "react";
import FoodCard from "../components/SubComponents/FoodCard";

const Foods = () => {
  const [foods, setFoods] = useState(Food);

  useEffect(() => {
    setFoods(foods);
  },[]);

  return (
    <div className="foods py-2 d-flex align-items-start">
      {foods.map((item, index) => (
        <FoodCard key={index} item={item} />
      ))}
    </div>
  );
};

export default Foods;
