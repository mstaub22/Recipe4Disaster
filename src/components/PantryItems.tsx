import { Link } from "react-router-dom";
import './PantryItems.scss'
const PantryItems = () => {
  return (
    <div className="home-button">
      <Link to="/" style={{ color: 'black' }}> Home</Link>
    </div>
  );
};
export default PantryItems;
