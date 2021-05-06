/*
 * Reducer actions related with  common action
 */
import * as types from "./types";

export function onLocationResponse(response) {
  return {
    type: types.CURRENT_LOCATION_REQUEST,
    response,
  };
}

export function addItemId(payload) {
  return {
    type: types.FV_REQUEST,
    payload,
  };
}
