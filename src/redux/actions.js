import {
  FILTER,
  RESET,
  ALL_VIDEOGAMES,
  CREATE_VIDEOGAME,
  VIDEOGAME_DETAIL,
  VIDEOGAME_NAME,
  CLEAR_DETAIL,
} from "./action-types";
import axios from "axios";

export const getAllVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios(
        "https://back-videogames-iqpl.onrender.com/videogames"
      );
      dispatch({
        type: ALL_VIDEOGAMES,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getVideogameDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `https://back-videogames-iqpl.onrender.com/videogames/${id}`
      );
      dispatch({
        type: VIDEOGAME_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const getVideogameName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `https://back-videogames-iqpl.onrender.com/videogames/name?name=${name}`
      );
      dispatch({
        type: VIDEOGAME_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const createVideogame = (videogame) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://back-videogames-iqpl.onrender.com/videogames",
        videogame
      );
      dispatch({
        type: CREATE_VIDEOGAME,
        payload: { ...videogame, id: response.data.id },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateFilter = (payload) => {
  return {
    type: FILTER,
    payload,
  };
};

export function reset() {
  return { type: RESET };
}
export const clearDetail = () => ({
  type: CLEAR_DETAIL,
});
