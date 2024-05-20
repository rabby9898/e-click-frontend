import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common";
import toast from "react-hot-toast";
import { setUserDetails } from "../../Store/userSlice";
import ROLE from "../../common/role";
const Header = () => {
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  console.log(user);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.user_logout.url, {
      method: SummaryApi.user_logout.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    if (data.success) {
      dispatch(setUserDetails(null));
      toast.success(data.message);
    }
    if (data.error) {
      toast.error(data.message);
    }
  };
  return (
    <div className="h-20 shadow-xl bg-slate-100 w-full z-40">
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
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="">
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
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {user?.role === ROLE.ADMIN && (
                  <Link className="hidden md:block" to={"/Admin-dashboard"}>
                    Admin Dashboard
                  </Link>
                )}
              </li>
            </ul>
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
            {user ? (
              <Link
                to={"/"}
                className="px-5 py-3 rounded-full text-white bg-red-600 hover:bg-red-700"
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="px-5 py-3 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-[#dc2626] to-transparent opacity-70 dark:opacity-100" />
    </div>
  );
};

export default Header;
