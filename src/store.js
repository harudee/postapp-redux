// 글쓰기, 글수정, 글삭제

const POST_SAVE = "POST_SAVE";
const POST_UPDATE = "POST_UPDATE";
const POST_DELETE = "POST_DELETE";

export const postSave = (post) => {
  return {
    type: POST_SAVE,
    payload: post,
  };
};

export const postUpdate = (post) => {
  return {
    type: POST_UPDATE,
    payload: post,
  };
};

export const postDelete = (id) => {
  return {
    type: POST_DELETE,
    payload: id,
  };
};

const initstate = {
  posts: [
    {
      id: 1,
      title: "title1",
      content: "content1",
    },
    {
      id: 2,
      title: "title2",
      content: "content2",
    },
    {
      id: 3,
      title: "title3",
      content: "content3",
    },
  ],
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case POST_SAVE:
      return {
        posts: [...state.posts, action.payload],
      };
    case POST_UPDATE:
      return {
        posts: state.posts.map((post) => {
          if (post.id == action.payload.id) {
            return action.payload;
          } else {
            return post;
          }
        }),
      };
    case POST_DELETE:
      return {
        posts: state.posts.filter((post) => post.id != action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
