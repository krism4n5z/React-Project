import { Provider } from "react-redux";
import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
//import Details from "./Details";
//import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
import store from "./store";

const Details = lazy(() => import("./Details"));

const App = () => {
  // const theme = useState("darkblue");

  return (
    //  <ThemeContext.Provider value={theme}>
    <Provider store={store}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>loading rounte...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </Provider>
    //  </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
