'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const User = () => {
   const router = useRouter()
   const role  = localStorage.getItem("token")
  return (
    <div onClick={()=>{
      localStorage.setItem("token", "");
      router.refresh();
    }}>{role} Logout</div>
  )
}

export default User