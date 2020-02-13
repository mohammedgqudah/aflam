import { SET_MOVIES_LIST } from "../constants";

export default (movies = { loading: true, list: [] }, { payload, type }) => {
  switch (type) {
    case SET_MOVIES_LIST: {
      return { ...movies, loading: false, list: payload };
    }
    default: {
      return { ...movies };
    }
  }
};
