import React, { useEffect, useState } from "react";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import "./Feed.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { category, handleChangeCategory } from "../../slices/sessionSlice";
import { handleAll, handleCategory } from "../../api/sessionApi";

function Feed() {
  const selectedCat = useSelector(category);
  // const [category, setCategory] = useState("country");
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedCat === "country") {
      dispatch(handleAll());
    }
  }, []);

  const handleChange = (event) => {
    dispatch(handleChangeCategory(event.target.value));
    event.target.value === "country"
      ? dispatch(handleAll())
      : dispatch(handleCategory(event.target.value));
  };
  return (
    <div className="feed-container">
      <div className="component-header-filter-container">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCat}
            onChange={handleChange}
          >
            <MenuItem value={"country"}>All News</MenuItem>
            <MenuItem value={"asia"}>Asia</MenuItem>
            <MenuItem value={"europe"}>Europe</MenuItem>
            <MenuItem value={"americas"}>Americas</MenuItem>
            <MenuItem value={"china"}>China</MenuItem>
            <MenuItem value={"africa"}>Africa</MenuItem>
            <MenuItem value={"australia"}>Australia</MenuItem>
          </Select>
        </FormControl>
      </div>
      <NewsFeed category={"africa"} />
    </div>
  );
}

export default Feed;
