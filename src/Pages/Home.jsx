import Banner from "../Components/Banner/Banner";
import Category from "../Components/Category/Category";
import HorizontalCardProduct from "../Components/HorizontalProductCard/HorizontalProductCard";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Category />
      <Banner />
      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"} />
    </div>
  );
};

export default Home;
