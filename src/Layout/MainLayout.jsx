import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import SummaryApi from "../common";
import Context from "../Context/Context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../Store/userSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });
    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
    console.log(dataApi);
  };

  useEffect(() => {
    // user Details info
    fetchUserDetails();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, //user details data fetch
        }}
      >
        <Header />
        <main className="min-h-[calc(100vh-140px)] bg-white">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
};

export default MainLayout;
