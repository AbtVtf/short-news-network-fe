import axios from "axios";
import React, { useEffect, useState } from "react";

// STYLES
import "./Article.scss";
import { useNavigate, useParams } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import CommentsCard from "../../components/CommentsCard/CommentsCard";
import CommentInput from "../../components/CommentInput/CommentInput";
import { useDispatch, useSelector } from "react-redux";
import { article, loggedIn } from "../../slices/sessionSlice";
import { handleArticle } from "../../api/sessionApi";
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
  const { id } = useParams();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(handleArticle(id));
    console.log(data);
  }, [data]);
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  return (
    <div className="article-container">
      <div className="article-content-container">
        {/* <ArticleCard title={data?.title?.title} text={data?.text} /> */}
      </div>
      <div className="article-comments-container">
        <CommentsCard comments={data?.comments} />
      </div>
      {logged && (
        <div className="article-comments-input-container">
          <CommentInput />
        </div>
      )}
    </div>
  );
};

export default Article;
