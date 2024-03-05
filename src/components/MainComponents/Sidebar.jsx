import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  const checkActive = (match, location) => {
    const { pathname } = location

    return pathname === match
  }

  return (
    <>
      <div className="d-flex justify-content-start align-items-start w-80 sidebar">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-70"
          style={{ width: "280px",height:"100vh",background:" #ff3d3d"}}
        >
          <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item mb-2">
              <NavLink
                to="/foods"
                className="nav-link text-start py-3"
                isActive={() => checkActive("/foods")}
              >
                <i class="fa-solid fa-bowl-food icon-sidebar"></i>
                Foods
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                to="/restaurants"
                className="nav-link text-start py-3"
                isActive={() => checkActive("/restaurants")}
              >
                <i class="fa-solid fa-utensils icon-sidebar"></i>
                Restaurants
              </NavLink>
            </li>

            <li className="nav-item mb-2">
              <NavLink
                to="/categories"
                className="nav-link text-start py-3"
                isActive={() => checkActive("/categories")}
              >
                <i class="fa-solid fa-list icon-sidebar"></i>
                Categories
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                to="/food-order"
                className="nav-link text-start py-3"
                isActive={() => checkActive("/food-order")}
              >
                <i class="fa-solid fa-cart-shopping icon-sidebar"></i>
                Food Order
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                to="/favourite"
                className="nav-link text-start py-3"
                isActive={() => checkActive("/favourite")}
              >
                <i class="fa-solid fa-heart icon-sidebar"></i>
                Favourites
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                to="/settings"
                className="nav-link text-start py-3"
                isActive={() => checkActive("/settings")}
                
              >
                <i style={{marginRight:"7px"}} class="fa-regular fa-address-card"></i>
                Settings
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
