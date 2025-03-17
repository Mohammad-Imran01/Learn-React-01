import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movieList = [
    { id: 1, title: "Avenger", release_data: "2021" },
    { id: 2, title: "Spider", release_data: "2019" },
    { id: 3, title: "Table", release_data: "1994" },
  ];

  const submitHandler = (e) => {
    e.preventDefault()
    alert("key is " + searchQuery);
  };
  return (
    <div className="home">
      <form
        className="searchForm"
        action=""
        onSubmit={submitHandler}
        onChange={(e) => setSearchQuery(e.target.value)}
      >
        <input
          type="text"
          placeholder="Type movie name"
          className="search-input"
          value={searchQuery}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movieList.map((movie) => {
          <MovieCard movie={movie} id={movie.id} />;
        })}
      </div>
    </div>
  );
}
export default Home;
