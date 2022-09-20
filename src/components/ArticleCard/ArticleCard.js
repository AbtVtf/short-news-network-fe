import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// STYLES
import "./ArticleCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleClearArticle, isLoading } from "../../slices/sessionSlice";
import Skeleton from "@mui/material/Skeleton";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const ArticleCard = (props) => {
  // PROPS
  const { title = "", text = [] } = props;

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleBack = () => {
    dispatch(handleClearArticle());
    navigate(`/`);
  };
  return (
    <div className="component-article-card-container">
      <div className="component-article-button-container">
        <ArrowBackIosIcon onClick={handleBack} />
      </div>
      {loading ? (
        <>
          <Skeleton animation="wave" height={100} width="80%" />
          <Skeleton animation="wave" height={100} width="80%" />
          <Skeleton animation="wave" height={100} width="80%" />
        </>
      ) : (
        <>
          <div className="component-article-title-wrapper">
            <p className="component-article-title">{title}</p>
          </div>
          <div className="component-article-text-wrapper">
            {text?.map((item, index) => {
              return (
                <p className="component-article-text-wrapper" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ArticleCard;
