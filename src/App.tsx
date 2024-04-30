import "./App.css";
import PantryItems from "./components/PantryItems";
import RecipeHome from "./components/RecipeHome";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RecipeSearch from "./components/RecipeSearch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RecipeHome />} />
      <Route path="pantryItems" element={<PantryItems />} />
      <Route path="recipeSearch" element={<RecipeSearch />} />
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
