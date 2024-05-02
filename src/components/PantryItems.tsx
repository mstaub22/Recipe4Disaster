import { Link } from "react-router-dom";
import './PantryItems.scss'
const PantryItems = () => {
  return (
    <div className="home-button">
      <Link to="/" className="link-style"> Home</Link>
    </div>
  );
};
export default PantryItems;
