export function InstagramStoryPreview({ story }) {
  return (
    <section className="story-preview">
      <h1>{story.description}</h1>
      <ul>{story.comments?.map(comment => <li key={comment.id}>{comment.txt}</li>)}</ul>
    </section>
  );
}
