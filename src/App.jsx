import Navbar from "./compontents/Navbar";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";
import ContentPage from "./Pages/ContentPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMovie } from "./context/useMovie";
import FavouritePage from "./Pages/FavouritePage";

function App() {
  const showSearch = (page) => {
    return searchMovies !== "" ? <SearchPage /> : page;
  };

  const { fetchURL, searchMovies } = useMovie();

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={showSearch(<MainPage />)} />
          <Route
            path="/popular"
            element={showSearch(<ContentPage fetchURL={fetchURL.popular} />)}
          />
          <Route
            path="/upcoming"
            element={showSearch(<ContentPage fetchURL={fetchURL.upcoming} />)}
          />
          <Route
            path="/nowplaying"
            element={showSearch(<ContentPage fetchURL={fetchURL.nowPlaying} />)}
          />
          <Route path="/mylist" element={showSearch(<FavouritePage />)} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
