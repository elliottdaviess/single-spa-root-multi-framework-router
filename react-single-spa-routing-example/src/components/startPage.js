import React from "react";
import { useHistory } from "react-router-dom";
import CameraExample from "./capacitor/CameraExample";
import MyComponent from "./capacitor/MyComponent";

export default function StartPage() {
  const history = useHistory();

  function handleClick() {
    history.push("/middle");
  }

  return (
    <>
      <div>Hello from the start page</div>
      <button type="button" onClick={handleClick}>
        Next
      </button>
      <CameraExample></CameraExample>
      <MyComponent></MyComponent>
    </>
  );
}
