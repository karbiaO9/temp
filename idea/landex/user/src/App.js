import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginRouter from "./routes/LoginRouter";
import ProjectRouter from "./routes/ProjectRouter";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.token != undefined) {
      setAuth(true);
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.token;
    }
  }, []);

  return (
    <>
      {auth ? (
        <RouterProvider router={ProjectRouter} />
      ) : (
        <RouterProvider router={LoginRouter} />
      )}
    </>
  );
}

export default App;
