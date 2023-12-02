import { api } from "~/trpc/server";

const ListBook = async () => {
  const books = await api.book.getAll.query();
  console.log(books);

  return (
    <div>
      <div className="mx-2 grid grid-cols-5 gap-2 bg-slate-200 p-2">
        <div className="font-bold">Title</div>
        <div className="font-bold">ISBN Number</div>
        <div className="font-bold">Author</div>
        <div className="font-bold">Price</div>
        <div className="font-bold">Quantity</div>
      </div>

      {books.map((book) => {
        return (
          <div key={book.id} className="mx-2 grid grid-cols-5 gap-2 bg-slate-200 p-2">
            <div>{book.name}</div>
            <div>{book.isbn}</div>
            <div>{book.author}</div>
            <div>{book.price}</div>
            <div>{book.quantity}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ListBook;
