export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

const API_KEY = "619fef183328c4154553ec9f968ac7f6";

export async function searchMovies(query: string): Promise<MovieDetails[]> {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  const results = await response.json();

  return results.results;
}