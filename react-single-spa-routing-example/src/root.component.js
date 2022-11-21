import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import StartPage from "./components/startPage";
import MiddlePage from "./components/middlePage";
import LastPage from "./components/lastPage";

export default function Root(props) {
 const divStyle = {
    paddingTop: "100px",
  };
  
  return (
    <div style={divStyle}>
      <BrowserRouter basename={"/react"}>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/start" />;
          }}
        />{" "}
        <Route path="/start" component={StartPage} />
        <Route path="/middle" component={MiddlePage} />
        <Route path="/last" component={LastPage} />
      </BrowserRouter>
    </div>
  );
}
