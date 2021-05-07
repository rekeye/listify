import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import "./styles/main.css";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Dashboard code={code} /> : <Login />; //if code have been returned from authorization render Dashboard otherwise Login
}

export default App;
