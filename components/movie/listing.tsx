import Image from 'next/image';
import { MovieDetails } from "./index";

export function MovieListing({ details }: { details: MovieDetails }) {
  const posterUrl = `https://image.tmdb.org/t/p/w780/${details.poster_path}`;

  return (
      <li>
        <div className="flex flex-col space-y-2">
          <Image width={500} height={500} src={posterUrl} alt="Movie poster" className="aspect-[2/3] w-full rounded-md border"/>
          <h4 className="font-bold">
            {details.title}
          </h4>
        </div>
      </li>
  )
}