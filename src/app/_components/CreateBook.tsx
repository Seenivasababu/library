"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { api } from "~/trpc/react";

const CreateBook = () => {
  const router = useRouter();

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
    <div className="  h-96 flex justify-center items-center">
      <div className=" w-2/4 bg-white flex  flex-col  gap-2 p-2">
        <input className="p-2 outline-none border-b mb-1"
          placeholder="Enter ISBN number"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <input className="p-2 outline-none border-b mb-1"
          placeholder="Enter Book Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input className="p-2 outline-none border-b mb-1"
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input className="p-2 outline-none border-b mb-1"
          placeholder="Enter price"
          value={price}
          type={"number"}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <input className="p-2 outline-none border-b mb-1"
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
              router.push("/");
              router.refresh();
            }
          }}
          className="rounded-lg bg-green-500 p-2 transition-colors duration-200 hover:bg-green-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
