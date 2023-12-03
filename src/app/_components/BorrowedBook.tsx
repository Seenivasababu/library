import React from 'react'
import { api } from '~/trpc/server'
import ListBook from './ListBook'
import BorrowedBookList from './BorrowedBookList'

async function BorrowedBook() {
  
   const books = await api.book.getBooksByUser.query({username:"user"})


  return (
    <BorrowedBookList books={books}/>
   
  )
}

export default BorrowedBook