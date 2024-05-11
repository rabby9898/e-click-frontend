import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const user = useSelector((state) => state.user?.user);
  return (
    <div className="min-h-[calc(100vh-120px)] flex">
      <aside className="bg-slate-300 min-h-full w-full max-w-60">
        <div className="h-32 flex justify-center items-center flex-col mt-8">
          <div className=" text-3xl cursor-pointer relative ">
            {user?.profilePic ? (
              <img
                className="w-20 h-20 rounded-full"
                src={user?.profilePic}
                alt={user?.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <div>
            <p className="text-lg font-semibold mt-4">{user?.name}</p>
            <p className="text-sm">{user?.role}</p>
          </div>
        </div>
      </aside>
      <main>main</main>
    </div>
  );
};

export default AdminDashboard;
