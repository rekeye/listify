import React from "react";
import Login from "./views/Login";
import TopArtists from "./views/TopArtists";
import Layout from "./components/Layout";
import "./styles/main.css";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? (
    <Layout>
      <TopArtists code={code} />
    </Layout>
  ) : (
    <Login />
  ); //if code have been returned from authorization render Dashboard otherwise Login
}

export default App;
