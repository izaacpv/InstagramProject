import { InstagramStoryPreview } from "./InstagramStoryPreview";

export function InstagramStoryList({ storys }) {
  return (
    <section className="app-story-list">
      {storys.map((story) => (
        <div className="app-story-list-item" key={story.id}>
          <InstagramStoryPreview story={story} key={story.id} />
        </div>
      ))}
    </section>
  );
}
