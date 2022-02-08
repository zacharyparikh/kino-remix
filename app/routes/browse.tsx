import { LoaderFunction } from 'remix';
import stylesUrl from '../styles/browse.css';

type Movie = {
  id: string;
  title: string;
};

type LoaderData = {
  movies: Movie[];
};

export const loader: LoaderFunction = async ({ request }) => {};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};
