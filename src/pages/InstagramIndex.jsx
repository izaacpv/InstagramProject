import { useSelector } from "react-redux";
import { InstagramStoryList } from "../cmps/InstagramStoryList";
import { useEffect } from "react";
import { loadStorys } from "../store/story.actions";

export function InstagramIndex() {
  const storys = useSelector((storeState) => storeState.storyModule.storys);
  
  useEffect(() => {
    loadStorys();
  }, [])

  if (!storys) return <div>Loading...</div>
  return (
    <section className="instagram-app">
      <InstagramStoryList storys={storys} />
    </section>
  );
}
