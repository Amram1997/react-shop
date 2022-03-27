export function getRequest(url, arr) {
  return fetch(url).then((res) => res.json());
}
