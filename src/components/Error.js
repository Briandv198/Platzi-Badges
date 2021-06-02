import React from "react";

function Error(props) {
  return (
    <div>
      <h3>{props.error.message}</h3>
    </div>
  );
}

export default Error;
