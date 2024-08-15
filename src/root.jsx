import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import DeskChairs from "./pages/DeskChairs";
import TopCategories from "./components/TopCategories";
import Testimonials from "./components/Comment";
import Login from "./components/Registratsia";
import FeaturedProduct from "./components/FeaturedProduct";
import Admin from "./components/Admin";
import WoodenChairs from "./pages/WoodrnChair";
import RoomChairs from "./pages/RoomChairs";
import ParkChairs from "./pages/ParkChairs";
import Footer from "./components/footer";
import DeskChairPage from "./CategoryPage/DeskchairPage";
import ParkChairPage from "./CategoryPage/ParkChairPage";
import RoomChairPage from "./CategoryPage/RoomChairPage";
import ScenicChairPage from "./CategoryPage/ScenicChairPage";
import BeautifulChairPage from "./CategoryPage/BeautifullChairs";
import WoodenChairPage from "./CategoryPage/WoodenChairPage";
import WingChairPage from "./CategoryPage/WingChairPage";

const Root = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleShowLogin = (show) => {
    setShowLogin(show);
  };

  const handleLoginSuccess = (userName) => {
    setLoggedInUser(userName);
    setShowLogin(false);
  };

  return (
    <div>
      <Navbar
        setShowLogin={setShowLogin}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />


      <Routes>
        <Route path="/" element={<><Banner /> <FeaturedProduct /><TopCategories /></>} />
        <Route path="category/1" element={<DeskChairs />} />
        <Route path="category/2" element={<WoodenChairs />} />
        <Route path="category/3" element={<DeskChairs />} />
        <Route path="category/4" element={<ParkChairs />} />
        <Route path="category/5" element={<RoomChairs />} />
        <Route path="/desk-chair" element={<DeskChairPage />} />
        <Route path="/park-chair" element={<ParkChairPage />} />
        <Route path="/room-chair" element={<RoomChairPage />} />
        <Route path="/scenic-chair" element={<ScenicChairPage />} />
        <Route path="/beautiful-chair" element={<BeautifulChairPage />} />
        <Route path="/wooden-chair" element={<WoodenChairPage />} />
        <Route path="/wing-chair" element={<WingChairPage />} />
      </Routes>

     
      <Testimonials loggedInUser={loggedInUser} />
      {showLogin ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Root;
