import "./RecipeHome.scss";
import "../App.css";

import { Link } from "react-router-dom";

const RecipeHome = () => {
  return (
    <>
      <h1>Recipe for Disaster</h1>
      <div className="recipe-links">
        <Link to="pantryItems" className="link-style">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/12/23/13/57/bag-1105587_1280.jpg"
            }
            style={{ height: "150px" }}
            alt="bag of veggies"
          />
          <p>Add what's in your pantry</p>
        </Link>
        <Link to="recipeSearch" className="link-style">
          <img
            src={
              "https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_1280.png"
            }
            style={{ height: "150px" }}
            alt="recipe card"
          />
          <p>Find recipes</p>
        </Link>
      </div>
    </>
  );
};

export default RecipeHome;
