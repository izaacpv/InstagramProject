import storyImg from "../assets/media/story-demo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Face2OutlinedIcon from "@mui/icons-material/Face2Outlined";
import { useForm } from "../customHooks/useForm";
import { storyService } from "../services/story.service.local";
import { useEffect } from "react";
import { addStoryComment } from "../store/story.actions";
import { Button } from "@mui/material";

export function InstagramStoryPreview({ story }) {
  const [comment, handleChange, setFields] = useForm(
    storyService.createEmptyComment()
  );

  function handleAddComment(ev) {
    ev.preventDefault();
    setFields({ txt: "" });
    addStoryComment(story, comment);
  }

  const { txt } = comment;
  const isLiked = story.likedBy.filter(
    (user) => user.mail === storyService.get
  );
  if (!story) return <div>Loading...</div>;
  return (
    <section className="story-preview">
      <div className="story-preview-header">
        <Face2OutlinedIcon />
        <h1>{story.by.fullname}</h1>
      </div>
      <img src={storyImg} />
      <div className="story-preview-interactions">
        <div className="story-preview-actions">
          <div >
            <svg
              className="preview-action"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
            </svg>
          </div>
          <div>
            <svg className="preview-action">
              <path
                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <div className="story-preview-stats">
          <span>{story.likedBy?.length} likes</span>
        </div>
        <div className="story-preview-description">
          <span><strong>{story.by.fullname}</strong></span>
          <span>{story.description}</span>
        </div>
        {!!story.comments.length && (
          <div className="story-preview-comments">
            <span>View all {story.comments.length} comments</span>
          </div>
        )}
        <div className="story-preview-add-comment">
          <form onSubmit={handleAddComment}>
            <input
              type="text"
              id="txt"
              name="txt"
              value={txt}
              onChange={handleChange}
              placeholder="Add a comment..."
            />
          </form>
        </div>
      </div>

      <hr />
    </section>
  );
}
