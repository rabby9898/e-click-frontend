import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import SummaryApi from "../common";

const MainLayout = () => {
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });
    const dataApi = await dataResponse.json();
    console.log(dataApi);
  };

  useEffect(() => {
    // user Details info
    fetchUserDetails();
  });

  return (
    <div>
      <Header />
      <main className="min-h-[calc(100vh-140px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
