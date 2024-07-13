import React from "react";
import "./PlantCard.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function PlantCard({ _id, name, category, price, image, description, loadPlants }) {

  const deletePlant = async(plantId) =>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)
    toast.success(response.data.message);

    loadPlants()
  }

  return (
    <div className="plant-card">
      <h1 className="plant-title">{name}</h1>
      <p className="plant-price">Price: {price}</p>
      <p>Category: {category}</p>
      <img className="plantcard-img" src={image} alt="img" />
      <p>Description: {description}</p>

      <div>
        <Link to={`/update/${_id}`}>
        <button
        type="button" 
        className="action-btn"
        >Edit
        </button>
        </Link>

        <button 
        type="button" 
        className="action-btn"
        onClick={()=>{
          deletePlant(_id)
        }}
        >Delete
        </button>
      </div>
    </div>
  );
}

export default PlantCard;
