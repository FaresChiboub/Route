import React, { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const handleAddMovie = () => {
    if (title && description && rating) {
      const newMovie = {
        title,
        description,
        rating: parseFloat(rating),
      };
      onAddMovie(newMovie);
      setTitle("");
      setDescription("");
      setRating("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="add-movie-container">
     
      <div>
        
        <input  id="title_input"
          type="text"
          value={title}
          placeholder="Add-Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        
        <input id="desc_input"
          type="text"
          value={description}
          placeholder="Add-Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
       
        <input id="rating_input"
          type="number"
          value={rating}
          placeholder="Add-Rating"
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button id="add_btn" className="glow-on-hover" onClick={handleAddMovie}>
        Click to Add
      </button>
    </div>
  );
};

export default AddMovie;
