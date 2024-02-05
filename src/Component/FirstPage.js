import React from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

const FirstPage = ({ first12Movies }) => (
  <div>
    <MovieList movies={first12Movies} />
    <Link style={{color:"lime",fontSize:"30px",position:"relative",left:"10px",top:"50px"}} to="/page2" className="nextpage glow-on-hover">Next Page</Link>
  </div>
);

export default FirstPage;