import {
  FILTER,
  ALL_VIDEOGAMES,
  VIDEOGAME_DETAIL,
  RESET,
  CREATE_VIDEOGAME,
  VIDEOGAME_NAME,
  CLEAR_DETAIL,
} from "./action-types";

const initialState = {
  videogameName: [],
  videogames: [],
  videogameDetail: {},
  allVideogames: [],
  filters: {
    sort: "name",
    genre: "",
    rating: "",
    source: "",
  },
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        allVideogames: payload,
      };

    case VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: payload,
      };
    case VIDEOGAME_NAME:
      return {
        ...state,
        videogameName: payload,
      };
    case CREATE_VIDEOGAME:
      return {
        ...state,
        videogames: [...state.videogames, payload],
      };
    case FILTER:
      const { filterType, value } = payload;
      let filters = { ...state.filters, [filterType]: value };
      let filteredResult = [...state.allVideogames];

      if (filters.source === "API") {
        filteredResult = filteredResult.filter(
          (game) => typeof game.id === "number"
        );
      } else if (filters.source === "DB") {
        filteredResult = filteredResult.filter(
          (game) => typeof game.id === "string"
        );
      }

      if (filterType === "sort") {
        filters = { ...filters, rating: "" };
      } else if (filterType === "rating") {
        filters = { ...filters, sort: "name" };
      }

      if (filters.genre) {
        filteredResult = filteredResult.filter((game) =>
          game.genres.includes(filters.genre)
        );
      }

      if (filters.sort === "AscSort") {
        filteredResult.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (filters.sort === "DescSort") {
        filteredResult.sort((a, b) => b.name.localeCompare(a.name));
      }

      if (filters.rating === "A") {
        filteredResult.sort(
          (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
        );
      }
      if (filters.rating === "D") {
        filteredResult.sort(
          (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
        );
      }

      return {
        ...state,
        videogames: filteredResult,
        filters: filters,
      };

    case RESET: {
      return {
        ...state,
        videogames: [...state.allVideogames],
      };
    }
    case CLEAR_DETAIL: {
      return {
        ...state,
        videogameDetail: {},
      };
    }
    default:
      return state;
  }
}
