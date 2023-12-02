"use client";
import React, { useState } from "react";
import { api } from "~/trpc/react";
const CreateBook = () => {
  const createBook = api.book.create.useMutation({
    onSuccess: () => {
      console.log("Book created");
    },
  });

 
  const [isbn, setIsbn] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState<number>();
  const [quantity, setQuantity] = useState<number>();

  return (
    <div className="m-2 flex flex-col gap-2 bg-slate-200 p-2">
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
          if (price && quantity) {
            console.log({ isbn, name, author, price, quantity });
            
            createBook.mutate({ isbn, name, author, price, quantity });
          }
        }}
        className="rounded-lg bg-green-300 p-2 transition-colors duration-200 hover:bg-green-800"
      >
        Save
      </button>
    </div>
  );
};

export default CreateBook;
