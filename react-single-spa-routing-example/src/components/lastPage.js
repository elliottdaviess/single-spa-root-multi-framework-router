import React from "react";
import { useHistory } from "react-router-dom";

export default function LastPage() {
  const history = useHistory();

  function handleClick() {
    history.push("/middle");
  }

  return (
    <>
      <div>Hello from the last page</div>
      <button type="button" onClick={handleClick}>
        Previous
      </button>
    </>
  );
}
