import { Content } from "../models/Content";
import { ResponseError } from "../models/ResponseError";

export enum ActionsTypes {
  FETCH_CONTENT = "FETCH_CONTENT",
  FETCH_CONTENT_FULFILLED = "FETCH_CONTENT_FULFILLED",
  FETCH_CONTENT_REJECTED = "FETCH_CONTENT_REJECTED",
}
interface FetchContent {
  type: ActionsTypes.FETCH_CONTENT;
  payload: string;
}
export const fetchContent = (payload: string): FetchContent => ({
  type: ActionsTypes.FETCH_CONTENT,
  payload,
});

interface FetchContentFulfilled {
  type: ActionsTypes.FETCH_CONTENT_FULFILLED;
  payload: Content;
}
export const fetchContentFulfilled = (
  payload: Content
): FetchContentFulfilled => ({
  type: ActionsTypes.FETCH_CONTENT_FULFILLED,
  payload,
});

interface FetchContentRejected {
  type: ActionsTypes.FETCH_CONTENT_REJECTED;
  error: ResponseError;
}
export const fetchContentRejected = (
  error: ResponseError
): FetchContentRejected => ({
  type: ActionsTypes.FETCH_CONTENT_REJECTED,
  error,
});
