import React from "react";
import { useState } from "react";
import classes from "./Search.module.css";
const Search = () => {

  const [input, setInput] = useState("");
  const handleInput = (event) => {
    const data = event.target.value;
    setInput(data);
  };

  return (
    <div className={classes.div}>
    <form>
      <input
        type="text"
        className={classes.search}
        value={input}
        placeholder="Search"
        onChange={handleInput}
      />
    </form>
    </div>
  );
};

export default Search;
