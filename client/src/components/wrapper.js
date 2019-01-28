import React from "react";

function Wrapper({ children }) {
  return (
    <div className="container">
      <div className="wrapper" style={style}>
        {children}
      </div>
    </div>
  );
}

const style = {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center"
};

export default Wrapper;
