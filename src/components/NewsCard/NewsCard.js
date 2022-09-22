import React, { useEffect, useState } from "react";

// STYLES
import "./NewsCard.scss";
import Skeleton from "@mui/material/Skeleton";

// LIBRARIES
import PropTypes from "prop-types";

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const NewsCard = (props) => {
  // PROPS
  const { index = 0, title = "", category = "" } = props;

  // CONSTANTS USING LIBRARYS
  const [isFromLeft, setIsFromLeft] = useState(false);
  // CONSTANTS USING HOOKS
  useEffect(() => {
    if (index % 2 === 0) {
      setIsFromLeft(true);
    }
  }, []);

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      className={`component-news-card-container ${isFromLeft ? "sfl" : "sfr"}`}
    >
      {title ? (
        <>
          <div className="component-news-header-container">
            <div
              className="component-news-category-wrapper"
              style={{ backgroundColor: "#1963ED" }}
            >
              <p className="component-news-category">
                {capitalizeFirstLetter(category)}
              </p>
            </div>
          </div>
          <div className="component-news-title-wrapper">
            <p className="component-news-title">{title}</p>
          </div>
        </>
      ) : (
        <div className="component-skeleton-container">
          <Skeleton animation="wave" height={90} width="80vw" />
          <Skeleton animation="wave" height={90} width="80vw" />
          <Skeleton animation="wave" height={90} width="80vw" />
          <Skeleton animation="wave" height={90} width="80vw" />
          <Skeleton animation="wave" height={90} width="80vw" />
        </div>
      )}
    </div>
  );
};

NewsCard.propTypes = {
  data: PropTypes.object,
};

export default NewsCard;
