import { Xhr } from "./Epic";

export interface ResponseError {
  message: string;
  name: string;
  xhr: Xhr;
  request: Request;
  status: number;
  responseType: string;
  response?: any;
}
