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
  const likes = useSelector(userLikesTitles);
  const allLikes = useSelector(userLikesTitles);
  console.log({ allLikes });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  useEffect(() => {
    // dispatch(handleGetLikes(idUser));
    // let allLikedTitles = [];
    // allLikes.forEach((like) => {
    //   news.forEach((article) => {
    //     if (like["id_title"] === article["id_title"]) {
    //       allLikedTitles.push(article);
    //     }
    //   });
    // });
    // dispatch(handleChangeLikedTitles(allLikedTitles));
  }, []);
  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleArticle = (id) => {
    // dispatchEvent(handleChangeArticle(id));
    navigate(`/article/${id}`);
  };
  return (
    <div className="page-profile-container">
      {likes?.map((item, index) => {
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
      <ProfileCard />
      <ProfileLikes />
    </div>
  );
};

export default ProfilePage;
