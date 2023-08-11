import Hero from "../compontents/Hero";
import MovieRow from "../compontents/MovieRow";
import { useMovie } from "../context/useMovie";
export default function MainPage() {
  const { fetchURL } = useMovie();

  return (
    <div className="container">
      <Hero fetchURL={fetchURL.popular} />
      <MovieRow
        fetchURL={fetchURL.popular}
        title={"Popular"}
        link={"/popular"}
      />
      <MovieRow
        fetchURL={fetchURL.upcoming}
        title={"Upcoming"}
        link={"/upcoming"}
      />
      <MovieRow
        fetchURL={fetchURL.nowPlaying}
        title={"Now Playing"}
        link={"/nowplaying"}
      />
    </div>
  );
}
