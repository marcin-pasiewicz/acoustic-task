/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Xhr {}

export interface Headers {}

export interface Request {
  async: boolean;
  crossDomain: boolean;
  withCredentials: boolean;
  headers: Headers;
  method: string;
  responseType: string;
  timeout: number;
  url: string;
}
