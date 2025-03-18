import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movieList = [
    { id: 1, title: "Avenger", release_date: "2021" },
    { id: 2, title: "Spider", release_date: "2019" },
    { id: 3, title: "Table", release_date: "1994" },
    { id: 4, title: "Inception", release_date: "2010" },
    { id: 5, title: "Interstellar", release_date: "2014" },
    { id: 6, title: "Matrix", release_date: "1999" },
    { id: 7, title: "Titanic", release_date: "1997" },
    { id: 8, title: "Gladiator", release_date: "2000" },
    { id: 9, title: "Joker", release_date: "2019" },
    { id: 10, title: "Avatar", release_date: "2009" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    alert("key is " + searchQuery);
  };

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

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
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
