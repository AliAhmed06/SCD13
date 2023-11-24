"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { AiOutlineUpload } from "react-icons/ai";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const saveHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/products", {
        title: name,
        description,
        price,
      });
      console.log(response);
      if (response.data.success) {
        alert(response.data.message);
        // router.push("/products");
      } else {
        alert(response.data.message);
      }

      setName("");
      setDescription("");
      setPrice("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-[40%] p-10 border border-black">
      <h3 className="text-2xl font-bold pb-5">New Product</h3>

      <form onSubmit={saveHandler} className="flex flex-col gap-2">
        <label htmlFor="name" className="font-semibold text-lg">
          Product Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Product Name..."
          className="admin_text_field "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description" className="font-semibold text-lg">
          Description
        </label>
        <textarea
          id="description"
          className="admin_text_field h-[120px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label htmlFor="price" className="font-semibold text-lg">
          Price (in USD)
        </label>
        <input
          id="price"
          type="number"
          placeholder="Enter Price..."
          className="admin_text_field"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit" className="primaryBtn">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
