import React from "react";

import "./styles/loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const LoaderMini = () => {
  return (
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
