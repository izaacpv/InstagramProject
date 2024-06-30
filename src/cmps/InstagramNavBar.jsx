import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export function InstagramNavBar() {
  return (
    <section className="app-nav-bar">
      <ul className="app-nav-bar-items">
        <li className="list-item">
          <HomeOutlinedIcon />
          <span>Home</span>
        </li>
        <li className="list-item">
          <SearchOutlinedIcon />
          <span>Search</span>
        </li>
        <li className="list-item">
          <ExploreOutlinedIcon />
          <span>Explore</span>
        </li>
        <li className="list-item">
          <MarkChatUnreadOutlinedIcon />
          <span>Messages</span>
        </li>
        <li className="list-item">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </li>
        <li className="list-item">
          <AddCircleOutlineOutlinedIcon />
          <span>Create</span>
        </li>
      </ul>
    </section>
  );
}
