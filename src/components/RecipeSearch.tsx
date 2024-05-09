import { Link } from "react-router-dom";
import "./RecipeSearch.scss";
const RecipeSearch = () => {
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
          <button type="submit">
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
