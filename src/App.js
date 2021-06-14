import React, { Component, useState } from "react";
import "./styles.css";

const foodDataset = {
  Mughlai: [
    {
      name: "Butter Chicken",
      rating: "4.5/5"
    },
    {
      name: "Tandoori Chicken",
      rating: "4/5"
    },
    {
      name: "Mutton Biryani",
      rating: "4.7/5"
    },
    {
      name: "Mutton Curry",
      rating: "3.8/5"
    }
  ],
  SouthIndian: [
    {
      name: "Rava Dosa",
      rating: "4/5"
    },
    {
      name: "Masala Dosa",
      rating: "4.2/5"
    },
    {
      name: "Plain Dosa",
      rating: "4.5/5"
    },
    {
      name: "Idli Sambhar",
      rating: "4.8/5"
    }
  ],
  Desserts: [
    {
      name: "Nutella Waffle",
      rating: "4.7/5"
    },
    {
      name: "Waffle with Ice Cream",
      rating: "4.9/5"
    },
    {
      name: "Pancakes",
      rating: "4/5"
    },
    {
      name: "Shake",
      rating: "3.8/5"
    }
  ],
  Chinese: [
    {
      name: "Hakka Noodles",
      rating: "4.1/5"
    },
    {
      name: "Manchurian",
      rating: "4.3/5"
    },
    {
      name: "Dimsums",
      rating: "4.5/5"
    },
    {
      name: "Spring Roll",
      rating: "4.7/5"
    }
  ]
};

export default function App() {
  let [items, setItem] = useState("Mughlai");
  const categoryClickHandler = (item) => {
    setItem(item);
  };
  return (
    <div className="App">
      <h1>
        Welcome to{" "}
        <span style={{ backgroundColor: "#4433fa" }}>Khaan Khazana</span>
      </h1>
      <h2>Choose a category from the following</h2>
      {Object.keys(foodDataset).map((item) => {
        return (
          <button
            key={item}
            style={{
              padding: "0.6rem",
              margin: "1rem",
              borderRadius: "0.8rem",
              cursor: "pointer"
            }}
            onClick={() => categoryClickHandler(item)}
          >
            {item}
          </button>
        );
      })}
      <hr></hr>
      {foodDataset[items].map((dish) => {
        return (
          <ul className="dishList" keys={dish.name}>
            <li>
              <p>{dish.name}</p>
              <p>{dish.rating}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
