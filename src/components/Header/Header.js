import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// STYLES
import "./Header.scss";
// LIBRARIES
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { category, handleChangeCategory } from "../../slices/sessionSlice";
import { handleAll, handleCategory } from "../../api/sessionApi";

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const Header = (props) => {
  // PROPS

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const navigate = useNavigate();
  const selectedCat = useSelector(category);
  // const [category, setCategory] = useState("country");
  const dispatch = useDispatch();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    if (selectedCat === "country") {
      dispatch(handleAll());
    }
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleChange = (event) => {
    if (event.target.value === "all") {
      dispatch(handleChangeCategory("country"));
      dispatch(handleAll());
    } else {
      dispatch(handleChangeCategory(event.target.value));
      dispatch(handleCategory(event.target.value));
    }
  };
  const location = useLocation();

  const handleHome = () => {
    navigate(`/`);
  };

  return (
    <div className="component-header-container">
      <p className="component-header-logo-text" onClick={handleHome}>
        SNN
      </p>
      {location.pathname === "/" && (
        <div className="component-header-filter-container">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Region</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCat}
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
      )}
    </div>
  );
};

export default Header;
