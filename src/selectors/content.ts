import { State } from "../models/State";

export function getContent(state: State) {
  return state;
}

export function getContentData(state: State) {
  return getContent(state).data;
}

export function isFetchingContent(state: State) {
  return getContent(state).isFetchingContent;
}

export function getContentError(state: State) {
  return getContent(state).error;
}
