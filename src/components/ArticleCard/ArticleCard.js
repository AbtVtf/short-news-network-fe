import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// STYLES
import "./ArticleCard.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  article,
  handleClearArticle,
  isLoading,
  userId,
  userLikes,
} from "../../slices/sessionSlice";
import Skeleton from "@mui/material/Skeleton";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  handleAddLike,
  handleGetLikedTitles,
  handleGetLikes,
  handleRemoveLike,
} from "../../api/sessionApi";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const ArticleCard = (props) => {
  // PROPS
  const { title = "", text = [], id_title = 0 } = props;

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const allLikes = useSelector(userLikes);
  const idUser = useSelector(userId);
  const [isLiked, setIsLiked] = useState(false);
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    allLikes.forEach((like) => {
      if (like["id_title"] == id_title) {
        setIsLiked(true);
      }
    });
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleBack = () => {
    dispatch(handleClearArticle());
    navigate(`/`);
  };
  const handleLike = () => {
    let userLike = {
      id_user: idUser,
      id_title: id_title,
    };
    dispatch(handleAddLike(userLike)).then(() => {
      dispatch(handleGetLikes(idUser)).then(() => {
        // dispatch(handleGetLikedTitles(allLikes));
      });

      setIsLiked(true);
    });
  };

  const handleDislike = () => {
    let userLike = {
      id_user: idUser,
      id_title: id_title,
    };

    dispatch(handleRemoveLike(userLike)).then(() => {
      dispatch(handleGetLikes(idUser)).then(() => {
        // dispatch(handleGetLikedTitles(allLikes));
      });
      setIsLiked(false);
    });
  };

  return (
    <div className="component-article-card-container">
      <div className="component-article-button-container">
        <ArrowBackIosIcon onClick={handleBack} />
        {isLiked ? (
          <BookmarkIcon onClick={handleDislike} />
        ) : (
          <TurnedInNotIcon onClick={handleLike} />
        )}
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
            {title && <p className="component-article-title">{title}</p>}
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
