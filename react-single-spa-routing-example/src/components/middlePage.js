import React from "react";
import { useHistory } from "react-router-dom";
import Map from "./capacitor/Map";

export default function MiddlePage() {
  const history = useHistory();

  function handleClickNext() {
    history.push("/last");
  }

  function handleClickPrevious() {
    history.push("/start");
  }

  return (
    <>
      <div>Hello from the middle page</div>
      <button type="button" onClick={handleClickPrevious}>
        Previous
      </button>
      <button type="button" onClick={handleClickNext}>
        Next
      </button>
      <Map></Map>
    </>
  );
}
