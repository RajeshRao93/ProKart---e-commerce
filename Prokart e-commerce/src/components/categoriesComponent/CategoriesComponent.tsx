import React, { useEffect, useState } from "react";
import getCategories from "../../actions/categoryService";
import "./CategoriesComponent.css";
import { useNavigate } from "react-router-dom";

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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

  const changeCategory = (value: string) => {
    return navigate(`/category?category=${value}`);
  };

  return (
    <div className="pk-categories-bar">
      {categories.map((category: string, index: number) => {
        return (
          <span
            key={index}
            style={{ margin: "auto" }}
            onClick={() => changeCategory(category)}
          >
            {category.toUpperCase()}
          </span>
        );
      })}
    </div>
  );
};

export default CategoriesComponent;
