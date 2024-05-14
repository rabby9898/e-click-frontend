import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const params = useParams();
  console.log("params---->", params);
  return <div>{params.categoryName}</div>;
};

export default CategoryProduct;
