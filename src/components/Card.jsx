import React from "react";
import Button from "./Button";

const Card = ({ icons, title, body, bgColor, textColor }) => {
  return (
    <div className="card-content">
      <div className={bgColor}>
        <span>
          <img src={icons} alt={title} />
        </span>
        <h2>{title}</h2>
        <p>{body}</p>
        <Button textColor={textColor} />
      </div>
      
    </div>
  );
};

export default Card;
