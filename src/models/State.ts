import { Content } from "./Content";
import { ResponseError } from "./ResponseError";

export interface State {
  isFetchingContent: Boolean,
  data: Content,
  error: ResponseError,
}
