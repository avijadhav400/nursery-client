import React, { useState, useEffect } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import ImgAdd from "./add.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [plants, setPlants] = useState([]);

  const loadPlants = async () => {
    toast.loading("Loading plants...");
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`);
    toast.dismiss();
    toast.success("Plants loaded successfully");
    setPlants(response.data.data);
  };

  useEffect(() => {
    loadPlants();
  }, []);

  return (
    <div>
      <h1>Plants</h1>
      {plants.map((plant, i) => {
        const { _id, name, category, price, image, description } = plant;

        return (
          <PlantCard
            key={i}
            _id={_id}
            name={name}
            category={category}
            price={price}
            image={image}
            description={description}
            loadPlants={loadPlants}
          />
        );
      })}
      <Toaster />

      <Link to='/add'>
        <img src={ImgAdd} alt="add" className="add-btn" />
      </Link>
    </div>
  );
}

export default Home;
