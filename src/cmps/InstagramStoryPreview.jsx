import storyImg from "../assets/media/story-demo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Face2OutlinedIcon from "@mui/icons-material/Face2Outlined";
import { Input } from "@mui/material";

export function InstagramStoryPreview({ story }) {
  function getPreviewComments() {
    const previewComments = [];
    for (let i = 0; i < 3; i++) {
      previewComments.push(<li>{story.comments[i].txt}</li>);
    }
    return previewComments;
  }

  return (
    <section className="story-preview">
      <div className="story-preview-header">
        <Face2OutlinedIcon />
        <h1>{story.by.fullname}</h1>
      </div>
      <img src={storyImg} />
      <div className="story-preview-interactions">
        <div className="story-preview-actions">
          <FavoriteBorderIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 0.5 }}/>
          <ModeCommentOutlinedIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 0.5, marginTop: "5px" }}/>
        </div>
        <div className="story-preview-stats">
          <span>{story.likedBy.length} likes</span>
        </div>
        <div className="story-preview-description">
          <h1>{story.by.fullname}</h1>
          <span>{story.description}</span>
        </div>
        <div className="story-preview-comments">
          <span>View all {story.comments.length} comments</span>
        </div>
        <div className="story-preview-add-comment">
          <input
            type="text"
            id="add-comment"
            name="add-comment"
            placeholder="Add a comment..."
          />
        </div>
      </div>
      <hr />
    </section>
  );
}
