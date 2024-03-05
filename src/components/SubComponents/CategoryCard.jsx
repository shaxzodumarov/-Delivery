const CategoryCard = (props) => {
  const {img , name} = props.item
  return (
  <div className="card-category">
    <img
      className="img-category"
      src={img}
      alt=""
    />
    <p>{name}</p> 
  </div>
);
};

export default CategoryCard