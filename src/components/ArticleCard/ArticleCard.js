import React from "react";
import { useNavigate } from "react-router-dom";

// STYLES
import "./ArticleCard.scss";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const ArticleCard = (props) => {
  // PROPS
  const { title = "", text = [], link = "" } = props;

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const navigate = useNavigate();

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleBack = () => {
    navigate(`/`);
  };
  console.log({ link });
  return (
    <div className="component-article-card-container">
      <div className="component-article-title-wrapper">
        <p className="component-article-title">{title}</p>
      </div>
      <div className="component-article-text-wrapper">
        {text?.map((item) => {
          return <p className="component-article-text-wrapper">{item}</p>;
        })}
      </div>
      <div className="component-article-button-container">
        <button className="component-article-button-back" onClick={handleBack}>
          Back
        </button>
        {/* <button className="component-article-button-full">Full Article</button> */}
        {/* <input
          className="component-article-button-full"
          type="button"
          onClick={`location.href='${link}';`}
          value="Full Article"
        /> */}
      </div>
    </div>
  );
};

export default ArticleCard;
