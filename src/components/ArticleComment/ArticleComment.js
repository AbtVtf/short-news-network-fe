import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleGetComments, handleRemoveComment } from "../../api/sessionApi";

// STYLES
import "./ArticleComment.scss";
import ClearIcon from "@mui/icons-material/Clear";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const ArticleComment = (props) => {
  // PROPS
  const { id, index, user, comment } = props;
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const [deleted, setDeleted] = useState(false);
  const dispatch = useDispatch();

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const deleteComment = (commentId) => {
    setDeleted(true);
    dispatch(handleRemoveComment(commentId)).then(() => {
      dispatch(handleGetComments(id)).then(() => setDeleted(false));
    });
    // setTimeout(() => {
    //
    // }, 1000);
  };
  return (
    <div className="component-article-comment-container">
      <div
        className={`component-comments-card-wrapper ${
          deleted && "animation-delete"
        }`}
        key={index}
      >
        <div className="component-comments-card-delete-comment-wrapper">
          {user === comment.username && (
            <ClearIcon onClick={() => deleteComment(comment.id_comment)} />
          )}
        </div>{" "}
        <div className="component-comments-card-text-wrapper">
          <span
            className="component-comments-card-user"
            style={{ fontWeight: "600" }}
          >
            {comment.username}
          </span>{" "}
          <span style={{ fontWeight: "300" }}>{comment.comment}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleComment;
