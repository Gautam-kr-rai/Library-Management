import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="bg-black-500">
      <div className="flex flex-row items-center justify-center px-2 py-2 gap-8 bg-richBlue-100 text-white font-saira text-lg font-semibold shadow-md rounded-md w-full max-w-5xl mx-auto">


        <Link to={"/"}>
          <button className="hover:text-blue-600">
            🏡
          </button>
        </Link>

        {user && user.role == "Borrower" && (
          <Link to={"/books"} className="hover:text-blue-600">
            📚
          </Link>
        )}

        {user && user.role == "Borrower" && (
          <Link to={"/profile"}>
            <button className="hover:text-blue-600">
              MyBooks📖
            </button>
          </Link>
        )}
        {user && user.role == "Librarian" && (
          <Link to={"/addBook"}>
            <MdOutlineAddCircle />

          </Link>
        )}
        {user && user.role == "Librarian" && (
          <Link to={"/allBooks"}>
            🧾IssuedBook
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
