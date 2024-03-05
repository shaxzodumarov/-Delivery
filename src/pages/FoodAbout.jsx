import { useParams } from "react-router-dom";
import Foods from '../Data/Food'
import { useState } from "react";

const FoodAbout = () => {
  const {id} = useParams()
  const data = Foods.filter(i=>i.id==id)
  const [food, setFood] = useState(data[0])

  

  console.log(id);
  return (
    <div>
        <div style={{width:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img style={{width:"350px"}} src={food.img} alt="" />
            <div className="title-order-history" style={{width:"40%",color:"black",fontWeight:"600"}}>
                <ul className="list-group w-100">
                    <li className="list-group-item">Name : {food.name}</li>
                    <li className="list-group-item">Price : {food.price}</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default FoodAbout