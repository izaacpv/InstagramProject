import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";
import { userService } from "./user.service";

const STORAGE_KEY = "storys";

const loggedUser = {
  _id: "u105",
  fullname: "Bob",
};

export const storyService = {
  query,
  getById,
  save,
  remove,
  addStoryComment,
  removeStoryComment,
  editStoryComment,
  handleStoryLike
};
window.cs = storyService;

async function query() {
  var storys = await storageService.query(STORAGE_KEY);
  return storys;
}

function getById(storyId) {
  return storageService.get(STORAGE_KEY, storyId);
}

async function remove(storyId) {
  await storageService.remove(STORAGE_KEY, storyId);
}

async function save(story) {
  var savedStory;
  if (story._id) {
    const storyToSave = {
      _id: story.id,
      description: story.description,
      comments: story.comments,
      likedBy: story.likedBy,
      tags: story.tags,
    };
    savedStory = await storageService.put(STORAGE_KEY, storyToSave);
  } else {
    // Later, owner is set by the backend
    let storyToSave = getEmptyStory();

    storyToSave = {
      description: story.description,
      tags: story.tags,
    };
    savedStory = await storageService.post(STORAGE_KEY, storyToSave);
  }
  return savedStory;
}

async function addStoryComment(story, description) {
  const comment = getEmptyComment();

  comment.description = description;

  story.comments.push(comment);
  await storageService.put(STORAGE_KEY, story);

  return story;
}

async function editStoryComment(story, comment) {
  story.comments.map((commentObj) =>
    commentObj.id === comment.id ? comment : commentObj
  );
  await storageService.put(STORAGE_KEY, story);

  return story;
}

async function removeStoryComment(storyId, commentId) {
  const story = await getById(storyId);

  story.comments = story.comments.filter(
    (comment) => comment._id !== commentId
  );
  await storageService.put(STORAGE_KEY, story);

  return story;
}

async function handleStoryLike(storyId) {
  const story = await getById(storyId);
  const isLiked = story.likedBy.some((by) => by.id === getLoggedinUser()._id);
  if (isLiked) {
    story.likedBy = story.likedBy.filter(
      (by) => by._id !== getLoggedinUser()._id
    );
  } else {
    story.likedBy.push(getLoggedinUser());
  }
  await storageService.put(STORAGE_KEY, story);

  return story;
}

function getEmptyComment() {
  return {
    _id: "c-" + utilService.makeId(),
    by: "",
    imgUrl: "some-url",
    txt: "",
    likedBy: [],
  };
}

function getEmptyStory() {
  return {
    _id: "s-" + utilService.makeId(),
    by: "",
    imgUrl: "some-url",
    description: "",
    comments: [],
    likedBy: [],
    tags: [],
  };
}

function _createStory(description, comments, likedBy, tags) {
  return {
    _id: "s-" + utilService.makeId(),
    by: getLoggedinUser(),
    imgUrl: "some-url",
    description,
    comments,
    likedBy,
    tags,
  };
}

function _createComment(txt) {
  return {
    _id: "c-" + utilService.makeId(),
    by: userService.getLoggedinUser(),
    imgUrl: "some-url",
    txt,
    likedBy: [],
  };
}

function _createComments() {
  const comments = []
  for (let i = 0; i < 5; i++) {
    comments.push(_createComment('lorem ipsum'));
  }

  return comments
}

function _createStorys() {
  let storys = utilService.loadFromStorage(STORAGE_KEY);

  if (!storys) {
    storys = [];
    for (let i = 0; i < 5; i++) {
      storys.push(_createStory("blablabla",_createComments(), ['#test', "#test2"], ['#test', "#test2"]));
    }
  }

  utilService.saveToStorage(STORAGE_KEY, storys)

  return storys
}

function getLoggedinUser() {
  return loggedUser;
}

_createStorys()

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))
