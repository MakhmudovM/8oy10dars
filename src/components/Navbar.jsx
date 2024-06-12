import React from "react";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-md">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center">
        <a className="text-2xl font-bold text-white">Kolen Work List</a>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              tabIndex={0}
              className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full focus:outline-none"
            >
              <img
                alt="User Avatar"
                src={user.photoURL}
                className="rounded-full w-full h-full"
              />
            </button>
            <ul
              tabIndex={0}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10"
            >
              <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                <button
                  onClick={() => signOut(auth)}
                  className="w-full text-left"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
