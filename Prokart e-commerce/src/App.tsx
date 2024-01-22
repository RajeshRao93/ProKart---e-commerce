import "./App.css";
import NavBarComponent from "./components/navBarComponent/NavBarComponent";
import CategoriesComponent from "./components/categoriesComponent/CategoriesComponent";
import HomeComponent from "./components/homeComponent/HomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductByCategoryComponent from "./components/productComponent/productByCategoryComponent/ProductByCategoryComponent";

const App = () => {
  return (
    <div className="App">
      <NavBarComponent />
      <CategoriesComponent />
      <BrowserRouter>
        <Routes>
          <Route
            path="/category"
            element={<ProductByCategoryComponent category={"jewelery"} />}
          />
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
