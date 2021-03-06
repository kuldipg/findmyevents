import {
  GET_EVENTS,
  DELETE_EVENT,
  ADD_EVENT,
  GET_EVENT,
  UPDATE_EVENT,
  SEARCH_EVENTS,
} from "../actions/types";

const initialState = {
  allevents: [],
  events: [],
  event: {},
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        allevents: action.payload
      };
    case SEARCH_EVENTS:
      let searchedEvents;
      if(action.searchtext !== "") {
        searchedEvents = state.allevents.filter(element => {
          return element.name.toLowerCase().includes(action.searchtext.toLowerCase());
        })
      } else {
        searchedEvents = action.payload;
      }
      return {
        ...state,
        events: searchedEvents
      };
    case GET_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? (event = action.payload) : event
        ),
      };
    default:
      return state;
  }
}

export default eventReducer;
