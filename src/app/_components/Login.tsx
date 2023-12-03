"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { api } from "~/trpc/react";

const Login = () => {
  const router = useRouter();
  const [error,setError] = useState(false)
  const login = api.user.login.useMutation({
    onSuccess: (res) => {
      console.log("Login verfied");
      console.log(res);
      if(res.status=="failed"){
         setError(true)
      }else{
         localStorage.setItem("token", res.role ? res.role : "");
         router.push("/");
      }
     
    },
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-2/4 w-2/4 bg-white p-5 shadow-lg">
      {/* <label className='w-full p-2 m-2'>Enter user name</label> */}
      <input
        placeholder="Enter your username"
        className="w-full border-b p-3 outline-none"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      {/* <label className='w-full p-2 mt-2'>Enter password</label> */}
      <input
        placeholder="Enter your password"
        className="w-full border-b p-3 outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        onClick={() => {
          login.mutate({ username, password });
        }}
        className="flex w-full justify-center rounded-md bg-sky-600 px-4 py-1 text-white"
      >
        <div>Login</div>
      </button>
      {error && <span className="text-red-400 p-2 m-2">Something went wrong</span>}
    </div>
  );
};

export default Login;
