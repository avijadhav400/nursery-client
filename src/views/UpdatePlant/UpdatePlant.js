import React, { useState, useEffect } from "react";
import "./UpdatePlant.css";
import { Link, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function UpdatePlant() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

const updatePlant = async()=>{
    const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,{
        name:name,
        category: category,
        price: price,
        description: description,
        image: image
    })
    toast.success(response.data.message);
}

  const loadPlants = async (id) => {
    if (!id) return;

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/plant/${id}`
    );

    const { name, category, price, image, description } = response.data.data;
    setName(name);
    setCategory(category);
    setPrice(price);
    setDescription(description);
    setImage(image);
  };

  useEffect(() => {
    loadPlants(id);
  }, [id]);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>UpdatePlant: {id}</h2>
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

          <button onClick={updatePlant} type="button" className="add-plant-btn">
            Update Plant
          </button>
          <Link to="/">Show all plants</Link>
        </form>
      </div>
      <Toaster />
    </>
  );
}

export default UpdatePlant;
