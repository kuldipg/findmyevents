import {
  GET_EVENTS,
  ADD_EVENT,
  DELETE_EVENT,
  GET_EVENT,
  UPDATE_EVENT,
  SEARCH_EVENTS
} from "./types";

import axios from "axios";
import ENV from "../ENV";

export const getEvents = () => async (dispatch) => {
  const res = await axios.get(ENV.databaseAPI.GETEVENTS_URL);  
  dispatch({
    type: GET_EVENTS,
    payload: res.data,
  });
};

export const searchEvents = (searchtext) => async (dispatch) => {
  if(searchtext === "")  {
    const res = await axios.get(ENV.databaseAPI.GETEVENTS_URL); 
    dispatch({
      type: SEARCH_EVENTS,
      payload: res.data,
      searchtext: searchtext
    });
  } else {
    dispatch({
      type: SEARCH_EVENTS,
      payload: [],
      searchtext: searchtext
    });
  }  
};

export const getEvent = (id) => async (dispatch) => {
  const res = await axios.get(`${ENV.databaseAPI.GETEVENT_URL}/${id}`);

  dispatch({
    type: GET_EVENT,
    payload: res.data,
  });
};

export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`${ENV.databaseAPI.DELETEEVENT_URL}/${id}`);

  dispatch({
    type: DELETE_EVENT,
    payload: id,
  });
};

export const addEvent = (event) => async (dispatch) => {
  const res = await axios.post(`${ENV.databaseAPI.ADDEVENT_URL}`, event);

  dispatch({
    type: ADD_EVENT,
    payload: res.data,
  });
};

export const updateEvent = (event) => async (dispatch) => {
  const res = await axios.put(
    `${ENV.databaseAPI.UPDATEEVENT_URL}/${event.id}`,
    event
  );

  dispatch({
    type: UPDATE_EVENT,
    payload: res.data,
  });
};
