import React, { useState } from "react";

// STYLES
import "./CommentInput.scss";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { titleId, userId, username } from "../../slices/sessionSlice";
import {
  handleArticle,
  handleComment,
  handleGetComments,
} from "../../api/sessionApi";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const CommentInput = () => {
  // PROPS

  // CONSTANTS USING LIBRARYS
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const user = useSelector(username);
  const idUser = useSelector(userId);
  const idTitle = useSelector(titleId);

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleSendComment = () => {
    let finalComment = {
      id_user: idUser,
      id_title: idTitle,
      username: user,
      comment: comment,
    };
    dispatch(handleComment(finalComment));
    setTimeout(() => {
      dispatch(handleGetComments(idTitle)).then(
        window.scrollTo(0, document.body.scrollHeight)
      );
    }, 1000);
    setComment("");
  };
  return (
    <div className="component-comment-input-container">
      <input
        className="component-comment-input"
        value={comment}
        onChange={(e) => {
          e.preventDefault();
          setComment(e.target.value);
        }}
        placeholder="add a comment"
        type="text"
      ></input>
      <SendIcon onClick={handleSendComment} />
    </div>
  );
};

export default CommentInput;
