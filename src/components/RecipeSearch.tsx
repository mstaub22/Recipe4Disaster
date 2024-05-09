import { Link } from "react-router-dom";
import "./RecipeSearch.scss";
import { useState } from "react";

const RecipeSearch = () => {
  //const [inputValue, setInputValue]= useState()
  const query = "italian wedding soup";

  const searchRecipes = () => {
    const apiKey = import.meta.env.VITE_API_KEY;

    //const apiKey = 'LPJeMC2THF46h3kARAWISw==H1A30OV0O2Mc4NnY';
    const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`;

    fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey || "",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="home-button">
        <Link to="/" className="link-style">
          Home
        </Link>
      </div>
      <div className="explore-area">
        <h1>Explore Recipes</h1>
        <div className="center-input">
          <input className="search-input"></input>
          <button onClick={searchRecipes} type="submit">
            <img
              src="https://img.icons8.com/?size=50&id=132&format=png"
              className="search-image"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
};
export default RecipeSearch;
