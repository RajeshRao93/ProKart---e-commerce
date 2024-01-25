import "./App.css";
import NavBarComponent from "./components/navBarComponent/NavBarComponent";
import CategoriesComponent from "./components/categoriesComponent/CategoriesComponent";
import HomeComponent from "./components/homeComponent/HomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductByCategoryComponent from "./components/productComponent/productByCategoryComponent/ProductByCategoryComponent";
import ProductDescriptionComponent from "./components/productComponent/productDescriptionComponent/ProductDescriptionComponent";
import BuyComponent from "./components/buyComponent/BuyComponent";
import OrderStatusComponent from "./components/buyComponent/OrderStatusComponent";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComponent />
        <CategoriesComponent />
        <Routes>
          <Route path="/category" element={<ProductByCategoryComponent />} />
          <Route path="/product" element={<ProductDescriptionComponent />} />
          <Route path="/buy" element={<BuyComponent />} />
          <Route path="/orderstatus" element={<OrderStatusComponent />} />
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
