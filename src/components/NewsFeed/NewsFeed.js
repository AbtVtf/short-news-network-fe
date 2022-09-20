import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

// STYLES
import "./NewsFeed.scss";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

// LIBRARIES
import africa from "./images/africa-black.png";
import americas from "./images/americas-black.png";
import asia from "./images/asia-black.png";
import australia from "./images/australia-black.png";
import china from "./images/china-black.png";
import europe from "./images/europe-black.png";
import globe from "./images/globe-black.png";
import { useDispatch, useSelector } from "react-redux";
import { handleAll } from "../../api/sessionApi";
import {
  selectedNews,
  category,
  handleChangeArticle,
} from "../../slices/sessionSlice";

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const NewsFeed = () => {
  // PROPS
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  const navigate = useNavigate();
  const [background, setBackgound] = useState(globe);
  const dispatch = useDispatch();
  const news = useSelector(selectedNews);
  const selectedCat = useSelector(category);
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    window.scrollTo(0, 0);

    if (selectedCat === "africa") {
      setBackgound(africa);
    } else if (selectedCat === `americas`) {
      setBackgound(americas);
    } else if (selectedCat === `asia`) {
      setBackgound(asia);
    } else if (selectedCat === `australia`) {
      setBackgound(australia);
    } else if (selectedCat === `china`) {
      setBackgound(china);
    } else if (selectedCat === `europe`) {
      setBackgound(europe);
    } else if (selectedCat === `country`) {
      setBackgound(globe);
    }
  }, [selectedCat]);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  const handleArticle = (id) => {
    dispatch(handleChangeArticle(id));
    navigate(`/article/${id}`);
  };
  console.log(news);
  return (
    <div
      className="component-news-feed-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      {news.length > 0 ? (
        <div className="component-cards-container">
          {news?.map((item, index) => {
            return (
              <div
                className="component-card-wrapper"
                key={index}
                onClick={() => {
                  handleArticle(item["id_title"]);
                }}
              >
                <NewsCard
                  index={index + 1}
                  title={item.title}
                  category={item.category}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="component-skeleton-container">
          <Skeleton animation="wave" height={90} width="80vw" />
          <Skeleton animation="wave" height={90} width="80vw" />
          <Skeleton animation="wave" height={90} width="80vw" />
          <Skeleton animation="wave" height={90} width="80vw" />
          <Skeleton animation="wave" height={90} width="80vw" />
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
