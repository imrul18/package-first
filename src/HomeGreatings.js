import React from "react";
import { Home } from "react-feather";

const HomeGreatings = ({ name }) => {
  return (
    <div>        
      <h1><Home size={40} /> Hello {name}</h1>
    </div>
  );
};

export default HomeGreatings;
