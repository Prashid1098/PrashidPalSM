import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import smg from "./smgroup.png";

function HeadBar() {
  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   const data = await response.json();
    //   console.log(json[0]);
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
    //   setPosts(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const findIdByTitle = () => {
    const foundPost = posts.find(post => post.title.toLowerCase() === searchInput.toLowerCase());
    if (foundPost) {
      console.log("Found ID:", foundPost.id);
    } else {
      console.log("Post not found");
    }
  };

  useEffect(() => {
    // Perform the search when searchInput changes
    findIdByTitle();
  }, [searchInput, posts]);

  return (
    <>
      <div className="Head-Container">
        <div className="Icon">TravelMedia.in</div>
        <div className="Signs">
          <img src={smg} alt="" />
        </div>
      </div>
      <div className="mid">
        <div className="smft">Social Media For Travellers</div>
        <input
          type="text"
          name="post"
          className="searchbar"
          placeholder="Search Here"
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
    </>
  );
}

ReactDOM.render(<HeadBar />, document.getElementById("root"));