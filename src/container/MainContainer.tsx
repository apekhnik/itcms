import React from "react";
import "./MainContainer.css";

const MainContainer:React.FC<{children: any}> = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export default MainContainer;
