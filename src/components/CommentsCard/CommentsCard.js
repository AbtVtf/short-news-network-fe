import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetComments, handleRemoveComment } from "../../api/sessionApi";
import { comments, username } from "../../slices/sessionSlice";

// STYLES
import "./CommentsCard.scss";
import ClearIcon from "@mui/icons-material/Clear";
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
  const deleteComment = (commentId) => {
    dispatch(handleRemoveComment(commentId));
    setTimeout(() => {
      dispatch(handleGetComments(id));
    }, 800);
  };
  return (
    <div className="component-comments-card-container">
      {allComments?.map((comment, index) => {
        console.log(comment.id_comment);
        return (
          <div className="component-comments-card-wrapper" key={index}>
            {user === comment.username && (
              <div className="component-comments-card-delete-comment-wrapper">
                <ClearIcon onClick={() => deleteComment(comment.id_comment)} />
              </div>
            )}{" "}
            <p className="component-comments-card-text-wrapper">
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
