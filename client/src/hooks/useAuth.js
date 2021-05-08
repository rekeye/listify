import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  //#region login call
  useEffect(() => {
    axios
      .post("http://localhost:3001/login", { code })
      .then(({ data: { accessToken, refreshToken, expiresIn } }) => {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setExpiresIn(expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
        window.location = "/";
      });
  }, [code]);
  //#endregion

  //#region refresh call
  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", { refreshToken })
        .then(({ data: { accessToken, expiresIn } }) => {
          setAccessToken(accessToken);
          setExpiresIn(expiresIn);
        })
        .catch((err) => {
          console.log("Something went wrong!", err);
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);
  //#endregion

  return accessToken;
};

export default useAuth;
