import React from "react";
import "./card.css"; 

const Card = ({ title, header, cardContent, lastUpdated, applyLink, applyNow,salary }) => {
  return (
    <div className="card_container">
      <h1 className="card_header">{title}</h1>
      <h1 className="card_header">{header}</h1>
      <p className="card_content">{cardContent}</p>
      <p className="card_lastUpdated">{lastUpdated}</p>
      { applyLink ? <a href={applyLink} target="_blank" rel="noopener noreferrer" className="card_button">{applyNow}</a> : ""}
      {salary ? <p className="card_content">{salary}</p> : ""}
    </div>
  );
};

export default Card;
