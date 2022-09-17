import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

// STYLES
import "./NewsFeed.scss";
import { useNavigate } from "react-router-dom";
// LIBRARIES
import africa from "./images/africa-black.png";
import americas from "./images/americas-black.png";
import asia from "./images/asia-black.png";
import australia from "./images/australia-black.png";
import china from "./images/china-black.png";
import europe from "./images/europe-black.png";
import globe from "./images/globe-black.png";
import { useDispatch } from "react-redux";

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const NewsFeed = () => {
  // PROPS
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [background, setBackgound] = useState(globe);
  const dispatch = useDispatch();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    // dispatch(handleCategory("test"));
    // if (category === "country" || category === "all") {
    //   console.log("country");
    //   axios
    //     .get("https://short-news-network.herokuapp.com/all-titles")
    //     .then((response) => {
    //       // console.log(response);
    //       setData(response["data"]);
    //     });
    // } else {
    //   axios
    //     .get(
    //       `https://short-news-network.herokuapp.com/category?cat=${category}`
    //     )
    //     .then((response) => {
    //       // console.log(response);
    //       setData(response["data"]);
    //     });
    // }
    // if (category === "africa") {
    //   setBackgound(africa);
    // } else if (category === `americas`) {
    //   setBackgound(americas);
    // } else if (category === `asia`) {
    //   setBackgound(asia);
    // } else if (category === `australia`) {
    //   setBackgound(australia);
    // } else if (category === `china`) {
    //   setBackgound(china);
    // } else if (category === `europe`) {
    //   setBackgound(europe);
    // }
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  const handleArticle = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div
      className="component-news-feed-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="component-cards-container">
        {data?.map((item, index) => {
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
    </div>
  );
};

export default NewsFeed;
