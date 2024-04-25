import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className="h-20 shadow-md bg-white fixed w-full z-40">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center">
          <img src="https://i.ibb.co/3mFM79K/eclick-logo.png" alt="" />
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
            <FaRegCircleUser />
          </div>

          {/* <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
            <nav>
              <Link
                to={"/admin-panel/all-products"}
                className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
              >
                Admin Panel
              </Link>
            </nav>
          </div> */}

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
