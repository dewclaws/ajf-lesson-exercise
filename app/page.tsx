import { MovieListing, searchMovies } from "@/components/movie";

export default async function Home() {
  const results = await searchMovies("shrek");

  return (
    <main className="space-y-6">
        <h1 className="text-4xl font-bold">All Movies</h1>
        <ul className="grid grid-cols-6 gap-4">
          {results.map((movie) => (
              <MovieListing details={movie} key={movie.id}/>
          ))}
        </ul>
      </main>
  );
}
