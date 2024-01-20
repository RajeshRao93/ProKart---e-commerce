import React, { useEffect, useState } from "react";
import getCategories from "../../actions/categoryService";
import "./CategoriesComponent.css";

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((response) => response.json())
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="pk-categories-bar">
      {categories.map((category: string, index: number) => {
        return (
          <span key={index} style={{ margin: "auto" }}>
            {category.toUpperCase()}
          </span>
        );
      })}
    </div>
  );
};

export default CategoriesComponent;
