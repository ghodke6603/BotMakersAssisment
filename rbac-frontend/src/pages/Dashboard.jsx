import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";
import AdminCard from "../components/AdminCard";

function Dashboard() {

  const role =
    localStorage.getItem("role");

  return (

    <div>

      <Navbar />

      {role === "USER" &&
        <UserCard />
      }

      {role === "ADMIN" &&
        <AdminCard />
      }

    </div>
  );
}

export default Dashboard;