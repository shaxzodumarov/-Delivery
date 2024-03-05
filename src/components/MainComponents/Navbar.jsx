import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../../assets/user.avif";
import {  useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
    {currentPath === "/login" ? (
      <div class="w-100 bg-light p-3 d-flex justify-content-between align-items-center navbar d-none">
      <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <div className="d-flex">
        <i className="logo_i mt-1">Comfort</i>
        <p className="logo">Delivery</p>
      </div>
    </a>
    <div class="searchbar bg-white mx-auto py-1 px-2 rounded">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="What do you want eat today"
        class="px-2 py-1 w-75 bg-white"
      />
    </div>
    <Link to={'/settings'}>
      <img style={{ width: "50px", borderRadius: "50%" }} src={User} alt="" />
    </Link>
    </div>
    ) : (
      <div class="w-100 bg-light p-3 d-flex justify-content-between align-items-center navbar">
      <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <div className="d-flex">
        <i className="logo_i mt-1">Comfort</i>
        <p className="logo">Delivery</p>
      </div>
    </a>
    <div class="searchbar bg-white mx-auto py-1 px-2 rounded">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="What do you want eat today"
        class="px-2 py-1 w-75 bg-white"
      />
    </div>
    <Link to={'/settings'}>
      <img style={{ width: "50px", borderRadius: "50%" }} src={User} alt="" />
    </Link>
    </div>
    )}
    </>
  );
};

export default Navbar