import React from "react";
import { api } from "~/trpc/server";
import BookActions from "./BookActions";

const ViewBook = async ({ id }: { id: string }) => {
  const bookId = parseInt(id);
  const book = await api.book.byId.query({ id: bookId });
  console.log(book);

  return (
    <div>
      <h1 className="my-2 p-2 shadow-md">Book Details</h1>
      <div className="flex flex-col">
        <table className="min-w-full  border-gray-300 bg-white shadow-sm">
          <tbody>
            <tr className="border-b border-gray-300 shadow-sm">
              <td className="px-4 py-2 font-semibold">Book Name</td>
              <td className="px-4 py-2">{book?.name}</td>
            </tr>
            <tr className="border-b border-gray-300 shadow-sm">
              <td className="px-4 py-2 font-semibold">ISBN Number</td>
              <td className="px-4 py-2">{book?.isbn}</td>
            </tr>
            <tr className="border-b border-gray-300 shadow-sm">
              <td className="px-4 py-2 font-semibold">Book Author</td>
              <td className="px-4 py-2">{book?.author}</td>
            </tr>
            <tr className="border-b border-gray-300 shadow-sm">
              <td className="px-4 py-2 font-semibold">Book Price</td>
              <td className="px-4 py-2">{book?.price}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold shadow-sm">Available Quantity</td>
              <td className="px-4 py-2">{book?.quantity}</td>
            </tr>
          </tbody>
        </table>
        <BookActions id={bookId}/>
        
      </div>
    </div>
  );
};

export default ViewBook;
