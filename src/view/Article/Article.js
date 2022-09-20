import axios from "axios";
import React, { useEffect, useState } from "react";

// STYLES
import "./Article.scss";
import { useNavigate, useParams } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import CommentInput from "../../components/CommentInput/CommentInput";
import { useDispatch, useSelector } from "react-redux";
import { article, comments, loggedIn } from "../../slices/sessionSlice";
import { handleArticle, handleGetComments } from "../../api/sessionApi";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const Article = () => {
  // PROPS
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  // const [data, setData] = useState();
  const dispatch = useDispatch();
  const data = useSelector(article);
  const logged = useSelector(loggedIn);
  const allComments = useSelector(comments);
  const { id } = useParams();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(handleArticle(id));
    dispatch(handleGetComments(id));
  }, []);
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  return (
    <div className="article-container">
      <div className="article-content-container">
        <ArticleCard title={data?.title[0].title} text={data?.text} />
      </div>
      {allComments.length > 0 && (
        <div className="article-comments-container">
          <CommentsCard id={id} />
        </div>
      )}
      {logged && (
        <div className="article-comments-input-container">
          <CommentInput />
        </div>
      )}
    </div>
  );
};

export default Article;
