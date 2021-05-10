export default function getCurrentRelativeURL() {
  const currentURL = window.location.href;
  const hostURL = `${window.location.protocol}//${window.location.host}`;

  return currentURL.replace(hostURL, "");
}
