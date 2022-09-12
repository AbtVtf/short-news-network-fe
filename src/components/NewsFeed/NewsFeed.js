import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// STYLES
import "./NewsFeed.scss";
import { useNavigate } from "react-router-dom";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const NewsFeed = () => {
  // PROPS
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const [data, setData] = useState();
  const [category, setCategory] = useState("country");
  const navigate = useNavigate();

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    if (category === "country" || category === "all") {
      console.log("country");
      axios
        .get("https://short-news-network.herokuapp.com/all-titles")
        .then((response) => {
          // console.log(response);
          setData(response["data"]);
        });
    } else {
      axios
        .get(
          `https://short-news-network.herokuapp.com/category?cat=${category}`
        )
        .then((response) => {
          // console.log(response);
          setData(response["data"]);
        });
    }
  }, [category]);
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleArticle = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="component-news-feed-container">
      <div className="component-news-filter-container">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="age"
            onChange={handleChange}
          >
            <MenuItem value={"all"}>All News</MenuItem>
            <MenuItem value={"asia"}>Asia</MenuItem>
            <MenuItem value={"europe"}>Europe</MenuItem>
            <MenuItem value={"americas"}>Americas</MenuItem>
            <MenuItem value={"china"}>China</MenuItem>
            <MenuItem value={"africa"}>Africa</MenuItem>
            <MenuItem value={"australia"}>Australia</MenuItem>
          </Select>
        </FormControl>
      </div>
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
