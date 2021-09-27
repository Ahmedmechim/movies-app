import React from "react";

const Discreption = ({match,movies}) => {
//   console.log(match);
  let film=movies.find(el=>el.id==match.params.id)
  return (
    <div>
      <p>{film.title}</p>
    <p></p>
    </div>
  );
};

export default Discreption;
