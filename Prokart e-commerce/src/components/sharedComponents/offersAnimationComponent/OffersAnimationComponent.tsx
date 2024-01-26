import React from "react";
import { useNavigate } from "react-router-dom";
import "./OffersAnimationComponent.css";

const OffersAnimationComponent = () => {
  let navigate = useNavigate();

  const goToOffers = () => {
    navigate("/");
  };
  return (
    <div className="pk-offer">
      <h1 className="pk-offer-text" onClick={goToOffers}>
        Offers %
      </h1>
    </div>
  );
};

export default OffersAnimationComponent;
