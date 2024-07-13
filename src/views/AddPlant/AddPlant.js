import React, { useState } from "react";
import "./AddPlant.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

function AddPlant() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const addPlant = async () => {
    if (!name || !category || !price || !image || !description) {
      toast.error("Please enter all fields");
      return;
    }

    toast.loading("Adding plant...");

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/plant`,
      {
        name: name,
        category: category,
        price: price,
        image: image,
        description: description,
      }
    );

    toast.dismiss();
    toast.success(response.data.message);

    setName('')
    setCategory('')
    setImage('')
    setDescription('')
    setPrice('')
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>AddPlant</h2>
      <div className="form-container">
        <form>
          <input
            className="plant-input"
            type="text"
            placeholder="Enter plant name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />

          <input
            className="plant-input"
            type="text"
            placeholder="Enter plant category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <br />

          <input
            className="plant-input"
            type="number"
            placeholder="Enter plant price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />

         
          <input
            type="text"
            className="plant-input"
            placeholder="Enter plant image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <br />

          <input
            type="text"
            className="plant-input"
            placeholder="Enter plant description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />

          <button onClick={addPlant} type="button" className="add-plant-btn">
            Add Plant
          </button>
          <Link to="/">Show all plants</Link>
        </form>
      </div>
      <Toaster />
    </>
  );
}

export default AddPlant;
