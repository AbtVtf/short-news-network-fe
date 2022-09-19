import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetComments } from "../../api/sessionApi";
import { comments } from "../../slices/sessionSlice";

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
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  console.log(id);
  console.log(allComments);
  return (
    <div className="component-comments-card-container">
      {allComments.map((comment, index) => {
        return (
          <div className="component-comments-card-wrapper">
            <p>
              <span className="component-comments-card-user">
                {comment.username}
              </span>{" "}
              {comment.comment}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsCard;
