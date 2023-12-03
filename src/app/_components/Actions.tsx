"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { api } from "~/trpc/react";

const Actions = ({ id }: { id: number }) => {
  const router = useRouter();
  const role = localStorage.getItem("token")
  const deleteBook = api.book.delete.useMutation();
  return (
    <div>
      <div className="flex justify-between gap-2">
        <button className="rounded-sm bg-sky-600 px-3 py-1 text-white hover:bg-sky-400">
          <Link href={`/viewBook/${id}`}>View</Link>
        </button>
        {role==="admin" && <button className="rounded-sm bg-sky-600 px-3 py-1 text-white hover:bg-sky-400">
          <Link href={`/editBook/${id}`}>Edit</Link>
        </button>}
        {role==="admin" && <button
          onClick={async () => {
            await deleteBook.mutate({ id });

            router.refresh();
          }}
          className="rounded-sm bg-fuchsia-600 px-3 py-1 text-white hover:bg-fuchsia-800"
        >
          Delete
        </button>}
      </div>
    </div>
  );
};

export default Actions;
