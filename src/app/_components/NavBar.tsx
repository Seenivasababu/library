"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import User from "./User";

const NavBar = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const [status,setStaus] = useState(false)
  return (
    <div>
      <div className="-mt-30 flex items-center justify-between bg-sky-600 p-3">
        <div className="text-2xl font-bold text-white">
          <Link href={"/"}>Library Management system</Link>
        </div>
        {token ? (
          <button
            className="px-5"
            onClick={() => {
            
            }}
          >
            <User />
          </button>
        ) : (
          <button className="px-5">
            <Link href={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
