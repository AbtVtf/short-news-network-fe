import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetComments, handleRemoveComment } from "../../api/sessionApi";
import { comments, username } from "../../slices/sessionSlice";
import ArticleComment from "../ArticleComment/ArticleComment";

// STYLES
import "./CommentsCard.scss";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const CommentsCard = (props) => {
  // PROPS
  const { id } = props;
  const dispatch = useDispatch();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(handleGetComments(id));
  }, []);
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const allComments = useSelector(comments);
  const user = useSelector(username);
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <div className="component-comments-card-container">
      {allComments?.map((comment, index) => {
        return (
          <ArticleComment id={id} index={index} user={user} comment={comment} />
        );
      })}
    </div>
  );
};

export default CommentsCard;
