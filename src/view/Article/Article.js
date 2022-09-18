import axios from "axios";
import React, { useEffect, useState } from "react";

// STYLES
import "./Article.scss";
import { useNavigate, useParams } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const Article = () => {
  // PROPS
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const [data, setData] = useState();

  const { id } = useParams();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    axios
      .get(`https://short-news-network.herokuapp.com/article?id=${id}`)
      .then((response) => {
        setData(response["data"]);
      });
  }, []);
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <div className="article-container">
      <div className="article-content-container">
        <ArticleCard
          title={data?.title[0].title}
          link={data?.link[0].link}
          text={data?.text}
        />
      </div>
    </div>
  );
};

export default Article;
