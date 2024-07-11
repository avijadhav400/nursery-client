import React from 'react'
import "./PlantCard.css"

function PlantCard({ _id, name, category, price, image, description }) {
  return (
    <div className='plant-card'>
        <h1 className='plant-title'>{name}</h1>
        <p className='plant-price'>Price: {price}</p>
        <p>Category: {category}</p>
        <p>Image: {image}</p>
        <p>Description: {description}</p>
       
    </div>
  )
}

export default PlantCard