import { InstagramStoryPreview } from "./InstagramStoryPreview";

export function InstagramStoryList({ storys }) {
  return (
    <section className="app-story-list">
      {storys.map((story, idx) => (
        <div className="app-story-list-item" key={idx}>
          <InstagramStoryPreview story={story} key={story._id} />
        </div>
      ))}
    </section>
  );
}
