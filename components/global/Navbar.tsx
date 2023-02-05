import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <span>
                  Phu An Dang
            </span>
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.slice(0,2).map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
