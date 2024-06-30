import storyImg from "../assets/media/story-demo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

export function InstagramStoryPreview({ story }) {

  function getPreviewComments() {
    const previewComments = [];
    for (let i = 0; i < 3; i++) {
       previewComments.push(<li>{story.comments[i].txt}</li>)
    }
    return previewComments
  }

  return (
    <section className="story-preview">
      <h1>{story.by.fullname}</h1>
      <img src={storyImg} style={{ maxHeight: "500px", maxWidth: "500px" }} />
      <p>{story.likedBy.length} Likes</p>
      <div className="story-actions">
        <FavoriteBorderIcon />
        <ModeCommentOutlinedIcon/>
      </div>
      <div className="story-preview-description">
        <span>{story.by.fullname}</span>
        <h1>{story.description}</h1>
      </div>
      <div className="story-preview-comments"></div>
      <ul>
        {getPreviewComments()}
      </ul>
    </section>
  );
}
