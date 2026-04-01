import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import TopBar from "@/components/topbar/Topbar";

const MainLayout = () => {
  return (
    <>
    <TopBar/>
      <Navbar/>
      <main className="w-full min-h-screen">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;