import { Link } from "react-router-dom";
import './RecipeSearch.scss'
const RecipeSearch = () => {
  return (
    <div className="home-button">
      <Link to="/" style={{ color: 'black' }}> Home</Link>
    </div>
  );
};
export default RecipeSearch;
