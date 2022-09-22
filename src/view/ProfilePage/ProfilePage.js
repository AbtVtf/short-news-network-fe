import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleAll,
  handleGetLikedTitles,
  handleGetLikes,
} from "../../api/sessionApi";
import NewsCard from "../../components/NewsCard/NewsCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLikes from "../../components/ProfileLikes/ProfileLikes";
import {
  handleChangeArticle,
  handleChangeCategory,
  handleChangeLikedTitles,
  selectedNews,
  userId,
  userLikes,
  userLikesTitles,
} from "../../slices/sessionSlice";

// STYLES
import "./ProfilePage.scss";

// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const ProfilePage = () => {
  // PROPS
  const titles = useSelector(userLikesTitles);
  const idUser = useSelector(userId);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    dispatch(handleGetLikedTitles(idUser));
  }, []);
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleArticle = (id) => {
    // dispatchEvent(handleChangeArticle(id));
    navigate(`/article/${id}`);
  };
  const handleToNews = () => {
    navigate(`/`);
  };
  return (
    <div className="page-profile-container">
      <p className="profile-page-title">Saved Articles</p>
      {titles.length > 0 ? (
        titles?.map((item, index) => {
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
        })
      ) : (
        <>
          <p className="profile-page-title">You should go read some news</p>
          <button onClick={handleToNews} className="profile-page-button">
            To the news
          </button>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
