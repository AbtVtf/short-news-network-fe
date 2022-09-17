import Header from "../../components/Header/Header";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import "./Feed.scss";

function Feed() {
  return (
    <div className="feed-container">
      <div className="feed-content-container">
        <NewsFeed category={"africa"} />
      </div>
    </div>
  );
}

export default Feed;
