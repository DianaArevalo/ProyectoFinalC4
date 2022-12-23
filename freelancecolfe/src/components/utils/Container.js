import React from "react";

function Container(props) {
  const { children, padding = "1rem", maxWidth = "120rem", className } = props;

  return (
  <div className={ className+ "container"} style={{padding: padding, maxWidth: maxWidth}}>
    {children}
  </div>
  );
}

export default Container;