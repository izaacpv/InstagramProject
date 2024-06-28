import { InstagramStoryPreview } from "./InstagramStoryPreview";

export function InstagramStoryList({storys}) {
  return (
    <section className="app-story-list">
      {storys.map(story => <InstagramStoryPreview story={story} key={story.id}/>)}
    </section>
  )
}