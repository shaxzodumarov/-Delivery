import { useEffect, useState } from "react";
import CategoryCard from "../components/SubComponents/CategoryCard";
import Categories from "../Data/Category";

const Category = () => {
  const [categories, setCategories] = useState(Categories);

  useEffect(() => {
    setCategories(Categories);
  }, []);

  return (
    <div className="Category  py-2 d-flex align-items-start">
      <h2>Category</h2>
      <div className="cards-category py-2 d-flex align-items-start">
        {categories.map((item, index) => (
          <CategoryCard item={item} />
        ))}

        {/* <div className="card-category">
                    <img className="img-category" src="" alt="" />
                    <p>Fast F...</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="https://api.prounity.uz/food-delivery/media/category/2405451.png" alt="" />
                    <p>Drink</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="" alt="" />
                    <p>Meat</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="https://api.prounity.uz/food-delivery/media/category/6978255.png" alt="" />
                    <p>Pizza</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="https://api.prounity.uz/food-delivery/media/category/5787016.png" alt="" />
                    <p>Burger</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="https://api.prounity.uz/food-delivery/media/category/360_F_585996070_hzWAqLeQLfgla0tG6njZZBSVmdaY9LhP.jpg" alt="" />
                    <p>Hotdog</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="https://api.prounity.uz/food-delivery/media/category/2224304.png" alt="" />
                    <p>Salat</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="https://api.prounity.uz/food-delivery/media/category/10107601.png" alt="" />
                    <p>Vegeta...</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="https://api.prounity.uz/food-delivery/media/category/256x256bb.jpg" alt="" />
                    <p>Chines...</p>
                </div>
                <div className="card-category">
                    <img className="img-category" src="https://api.prounity.uz/food-delivery/media/category/5141534.png" alt="" />
                    <p>Japane...</p>
                </div>
                <div className="card-category-r">
                    <h1>10<i class="fa-solid fa-plus r"></i></h1>
                </div> */}
      </div>
    </div>
  );
};

export default Category;
