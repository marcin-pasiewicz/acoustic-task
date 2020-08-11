import { ajax } from "rxjs/ajax";

export function request(url: string, method = "GET", payload?: any) {
  return ajax({
    url,
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });
}
