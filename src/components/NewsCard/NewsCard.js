import React from "react";

// STYLES
import "./NewsCard.scss";
// LIBRARIES
import PropTypes from "prop-types";

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const NewsCard = (props) => {
  // PROPS
  const { index = 0, title = "", category = "" } = props;

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var color = "";
  if (category === "africa") {
    color = "rgb(28, 139, 41)";
  } else if (category === "americas") {
    color = "rgb(237, 62, 62)";
  } else if (category === "asia") {
    color = "rgb(29, 179, 196)";
  } else if (category === "australia") {
    color = "rgb(193, 196, 29)";
  } else if (category === "china") {
    color = "rgb(196, 29, 152)";
  } else if (category === "europe") {
    color = "rgb(35, 28, 139)";
  }

  return (
    <div className="component-news-card-container">
      <div className="component-news-header-container">
        <div className="component-news-index-wrapper">
          <p className="component-news-index">{index}.</p>
        </div>
        <div
          className="component-news-category-wrapper"
          style={{ backgroundColor: color }}
        >
          <p className="component-news-category">
            {capitalizeFirstLetter(category)}
          </p>
        </div>
      </div>

      <div className="component-news-title-wrapper">
        <p className="component-news-title">{title}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  data: PropTypes.object,
};

export default NewsCard;
