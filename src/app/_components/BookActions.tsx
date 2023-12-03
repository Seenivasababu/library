"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { api } from "~/trpc/react";

const BookActions = ({ id }: { id: number }) => {
  const updateBook = api.book.update.useMutation();
  const router = useRouter();

  const removeBook = api.book.removeBook.useMutation();

  return (
    <div>
      <div className="flex gap-2 p-2 shadow-md">
        <button
          className="rounded-sm bg-blue-300 px-3 py-1"
          onClick={() => {
            updateBook.mutate({ id: id, username: "user" });
            router.push("/");
          }}
        >
          Borrow Book
        </button>
        <button
          className="rounded-sm bg-blue-200 px-3 py-1"
          onClick={() => {
            removeBook.mutate({ id: id, username: "user" });
            router.push("/");
          }}
        >
          Return Book
        </button>
      </div>
    </div>
  );
};

export default BookActions;
