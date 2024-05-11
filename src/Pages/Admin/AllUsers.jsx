import { useEffect } from "react";
import SummaryApi from "../../common";

const AllUsers = async () => {
  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUsers.url, {
      method: SummaryApi.allUsers.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    console.log("users Data", data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div>
      <h1>All Users</h1>
    </div>
  );
};

export default AllUsers;
