import React from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

const SecondPage = ({ second12Movies }) => (
  <div>
    <Link to="/" style={{color:"lime", fontSize:"30px", position:"relative", left:"10px", top:"-50px"}} className="homepage glow-on-hover">Home</Link>
    <MovieList movies={second12Movies} />
  </div>
);

export default SecondPage;