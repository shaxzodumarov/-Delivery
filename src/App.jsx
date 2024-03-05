import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/MainComponents/Navbar"
import Sidebar from "./components/MainComponents/Sidebar"
import Restaurant from "./pages/Restaurant"
import Category from "./pages/Category"
import Foods from "./pages/Foods"
import Favourite from "./pages/Favourite"
import UserProfile from "./pages/User/UserProfile"
import UpdateProfile from "./pages/User/UpdateProfile"
import FoodOrder from "./pages/FoodOrder"
import ChangePassword from "./pages/User/ChangePassword"
import RestaurantAbout from "./pages/RestaurantAbout"
import FoodAbout from "./pages/FoodAbout"
import Login from "./pages/Auth/Login"


function App() {
  return (
    <>
      <Navbar />
          <Routes>
            <Route path="/" element={<Sidebar />}>
              <Route path="/foods" element={<Foods />}/>
              <Route path="foods/foods/:id" element={<FoodAbout/>}/>
              <Route path="/restaurants" element={<Restaurant />} />
              <Route path="/restaurant-about/:id" element={<RestaurantAbout/>} />
              <Route path="/categories" element={<Category />} />
              <Route path="/food-order" element={<FoodOrder />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/settings" element={<UserProfile />} />
            </Route>
            <Route path="/update-profile" element={<UpdateProfile/>} />
            <Route path="/change-password" element={<ChangePassword/>} />
            <Route path="/Login" element={<Login/>} />
          </Routes>
    </>
  )
}

export default App