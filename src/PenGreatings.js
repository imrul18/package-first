import React from "react";
import { PenTool } from "react-feather";

const PenGreatings = ({ name }) => {
  return (
    <div>        
      <h1><PenTool size={40} /> Hello {name}</h1>
    </div>
  );
};

export default PenGreatings;
