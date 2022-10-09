export type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: number;
  imdbID: number;
};

export type SinglePageMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: number;
  imdbID: number;
  Plot: string;
  Genre: string;
  Released: string;
  Language: string;
};

export type RatedMovie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: number;
  imdbID: number;
  Genre: string;
  Rating: number | null;
};
