"use client";
import { useState } from "react";
import { getPost } from "./components/getPosts";
import { postPost } from "./components/postPost";
import { putPost } from "./components/putPost";
import { deletePost } from "./components/deletePost";

export default function App() {
  const [result, setResult] = useState<string>("");

  const handleGet = async () => {
    const data = await getPost();
    setResult(JSON.stringify(data, null, 2));
  };

  const handlePost = async () => {
    const data = await postPost();
    setResult(JSON.stringify(data, null, 2));
  };

  const handlePut = async () => {
    const data = await putPost();
    setResult(JSON.stringify(data, null, 2));
  };

  const handleDelete = async () => {
    const data = await deletePost();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CRUD API Demo with Axios</h1>

      <div className="flex gap-2 mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleGet}
        >
          GET
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handlePost}
        >
          POST
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={handlePut}
        >
          PUT
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </div>

      <textarea
        className="w-full h-60 p-2 border rounded font-mono bg-gray-100 text-sm text-black"
        value={result}
        readOnly
      />
    </div>
  );
}
