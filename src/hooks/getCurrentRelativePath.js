export default function getCurrentRelativeURL() {
  const currentURL = window.location.href;
  const hostURL = `${window.location.protocol}//${window.location.host}`;
  const searchVars = window.location.search;

  return currentURL.replace(hostURL, "").replace(searchVars, "");
}
