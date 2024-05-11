import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((state) => state.user?.user);
  console.log(user);
  return (
    <div className="h-20 shadow-md bg-white w-full z-40">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center">
          <Link to={"/"}>
            <img src="https://i.ibb.co/z4XZBPB/e-click-logo.png" alt="" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full px-3 outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer relative flex justify-center">
            {user?.profilePic ? (
              <img
                className="w-10 h-10 rounded-full"
                src={user?.profilePic}
                alt={user?.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>

          <div>
            <Link to={"/cart"} className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">0</p>
              </div>
            </Link>
          </div>

          <div>
            <Link
              to={"/login"}
              className="px-5 py-3 rounded-full text-white bg-red-600 hover:bg-red-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
