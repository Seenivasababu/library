"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { api } from "~/trpc/react";




const EditBook = ({id}:{id:string}) => {
  const bookId = parseInt(id)
  const router = useRouter()

  const result = api.book.byId.useQuery({id:bookId});
  const book = result.data
  
  const editBook = api.book.edit.useMutation({
   onSuccess: () => {
     console.log("Book Edited");
   },
 });
  
 console.log("shoulb be after data");
 
 
  const [isbn, setIsbn] = useState(book?.isbn);
  const [name, setName] = useState(book?.name)
  const [author, setAuthor] = useState(book?.author);
  const [price, setPrice] = useState(book?.price);
  const [quantity, setQuantity] = useState(book?.quantity);

  return (
    <div className=" flex flex-col gap-2 bg-white-200 p-2">
      <input
        placeholder="Enter ISBN number"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <input
        placeholder="Enter Book Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="Enter price"
        value={price}
        type={"number"}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />
      <input
        placeholder="Enter quantity"
        value={quantity}
        type={"number"}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          if (isbn && name && author && price && quantity) {
            console.log({ isbn, name, author, price, quantity });
            editBook.mutate({id:bookId, isbn, name, author, price, quantity })
            router.push("/")
            router.refresh()
          }
        }}
        className="rounded-lg bg-green-300 p-2 transition-colors duration-200 hover:bg-green-800"
      >
        Update
      </button>
    </div>
  );
};

export default EditBook;
