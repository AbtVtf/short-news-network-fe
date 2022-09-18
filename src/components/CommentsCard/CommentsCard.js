import React from "react";

// STYLES
import "./CommentsCard.scss";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const CommentsCard = (props) => {
  // PROPS
  const { comments = [] } = props;

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <>
      {comments.length > 0 && (
        <div className="component-comments-card-container">
          {comments.map((element, index) => {
            return (
              <div className="component-comments-card-wrapper">
                <div className="component-comments-user">
                  <span style={{ fontWeight: "800", margin: "0" }}>
                    {element.username}
                  </span>
                  <span style={{ fontWeight: "300", margin: "0" }}>
                    {" "}
                    {element.comment}
                  </span>
                </div>
                {/* <p className="component-comments-comment">{element.comment}</p> */}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CommentsCard;
