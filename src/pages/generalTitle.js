import React from "react";

function GeneralTitle({title}) {
  return (
    <a href='/'>
    <div className="general-title">
      <h1>{title}</h1>
    </div>
    </a>
  );
}

export default GeneralTitle;