import Link from "next/link";
import { api } from "~/trpc/server";
import { RouterOutputs } from "~/trpc/shared";
import Actions from "./Actions";

type Book = RouterOutputs["book"]["getAll"];

const ListBook = async () => {
  const books = await api.book.getAll.query({ page: 0 });

  return (
    <div>
      <div className="my-2 flex items-center justify-between bg-white p-3 shadow-md">
        <h1 className="font-bold">Book List</h1>
        <div>
          <button className="rounded-sm bg-sky-500 px-3 py-1 shadow-md hover:bg-sky-600">
            <Link href={"/addBook"}>Add Book</Link>{" "}
          </button>
        </div>
      </div>
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
  );
};

export default ListBook;
