import React from "react";
//import { AiOutlineCar } from "react-icons/ai";
import { TbKayak } from "react-icons/tb";
import { getCurrentUser } from "../actions/authActions";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
// import Search from "./Search";
// import Logo from "./Logo";

export default async function Navbar() {
  const user = await getCurrentUser();
  return (
    <header
      className="
      sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md
    "
    >
      <div className="flex items-center gap-2 text-3xl font-semibold text-blue-500">
        <TbKayak />
        <div>Kayak Tracker</div>
      </div>

      {user ? (
        <div>
          Welcome, {user.username}
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
      {/* <Logo />
      <Search />
      <div>Login</div> */}
    </header>
  );
}
