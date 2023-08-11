import { useMovie } from "../context/useMovie";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { setSearchMovies, searchMovies } = useMovie();

  return (
    <div className="navbar">
      <div className="icon">
        <Link className="logo" to="/" onClick={() => setSearchMovies("")}>
          Netflix.
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" onClick={() => setSearchMovies("")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/mylist" onClick={() => setSearchMovies("")}>
            My List
          </Link>
        </li>
      </ul>
      <input
        type="text"
        placeholder="Search movies..."
        onChange={(e) => setSearchMovies(e.target.value)}
        value={searchMovies}
      />
      <div className="profile">H</div>
    </div>
  );
}
