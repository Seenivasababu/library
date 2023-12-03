"use client"
import React from 'react'
import { RouterOutputs } from '~/trpc/shared'
import Actions from './Actions'

type Book = RouterOutputs["book"]["getBooksByUser"]

const BorrowedBookList = ({books}:{books:Book}) => {
   const role  = localStorage.getItem("token")
   if(role !== "user"){
      return null
   }
  return (
    <div className='p-2 shadow-md my-2'>
    Borrowed Books
    <div className=" bg-white-100 grid grid-cols-8 gap-2 p-3 shadow-sm">
      <div className="font-semibold">Title</div>
      <div className="font-semibold">ISBN Number</div>
      <div className="font-semibold">Author</div>
      <div className="font-semibold">Price</div>
      <div className="font-semibold">Quantity</div>
      <div className="font-semibold">Actions</div>
      
    </div>

    {books.map((book) => {
      return (
        <div
          key={book.id}
          className=" bg-white-100 grid grid-cols-8 gap-2 p-3 shadow-sm"
        >
          <div>{book.name}</div>
          <div>{book.isbn}</div>
          <div>{book.author}</div>
          <div>{book.price}</div>
          <div>{book.quantity}</div>
          <Actions id={book.id}/>
        </div>
      );
    })}
  </div>
  )
}

export default BorrowedBookList