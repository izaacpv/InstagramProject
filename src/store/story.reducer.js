export const SET_FILTER = "SET_FILTER";
export const UNDO_CHANGES = "UNDO_CHANGES";
export const SET_STORYS = "SET_STORYS";
export const SET_STORY = "SET_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const ADD_STORY = "ADD_STORY";
export const UPDATE_STORY = "UPDATE_STORY";

const initialState = {
  storys: null,
  story: null,
  filterBy: {},
  lastStorys: [],
};

export function storyReducer(state = initialState, cmd) {
  switch (cmd.type) {
    case SET_STORYS:
      return {
        ...state,
        storys: cmd.storys,
      };
    case SET_STORY:
      return {
        ...state,
        story: cmd.story
      }
    case REMOVE_STORY:
      return {
        ...state,
        storys: state.storys.filter((story) => story.id !== cmd.storyId),
        lastRobots: [...state.storys],
      };
    case ADD_STORY:
      return {
        ...state,
        storys: [...state.storys, cmd.story],
      };
    case UPDATE_STORY:
      return {
        ...state,
        storys: state.storys.map((story) =>
          story.id === cmd.story.id ? cmd.story : story
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filterBy: { ...state.filterBy, ...cmd.filterBy },
      };
    case UNDO_CHANGES:
      console.log("UNDO");
      return {
        ...state,
        storys: [...state.lastStorys],
      };
    default:
      return state;
  }
}
