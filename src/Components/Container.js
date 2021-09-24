import React, { useState } from "react";
import Add from "./Add";
import { Movies } from "./Donnes";
import BasicRating from "./Etoile";
import Faza from "./Faza";
import Footer from "./Footer";
import MoviesList from "./MoviesList";
import "./style.css";

const Container = () => {
  const [movies, setMoivies] = useState(Movies);
  const [value, setValue] = useState(0);

  const AddMovie = (title, dicreption, url, rating) => {
    let newMovie = {
      id: Math.random(),
      title: title,
      description: dicreption,
      posterURL: url,
      rating: rating,
    };
    setMoivies([...movies, newMovie]);
  };
  // const filter=(x)=>{
  //     movies.filter((el) => el.rating>=x);
  // }
  const [handelput, setHandelput] = useState("");
  const onChangeinput = (e) => {
    setHandelput(e.target.value);
  };
  return (
    <div>
      <div className="cont">
        <div className="navibarre">
          <i class="fas fa-search"></i>
          <input type="text" value={handelput} onChange={onChangeinput} />
          <BasicRating value={value} setValue={setValue} />
        </div>
        <div className="liste">
          {!value && handelput === "" ? <Faza /> : <span></span>}
          <MoviesList
            movies={
              !value
                ? movies.filter((el) =>
                    el.title.toLowerCase().includes(handelput.toLowerCase())
                  )
                : movies.filter(
                    (el) =>
                      el.title
                        .toLowerCase()
                        .includes(handelput.toLowerCase()) &&
                      el.rating === value
                  )
            }
          />
        </div>
        <Add AddMovie={AddMovie} />
      </div>
      <Footer />
    </div>
  );
};

export default Container;
