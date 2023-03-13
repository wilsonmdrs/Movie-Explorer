import axios from 'axios';
import { setupCache, buildWebStorage } from 'axios-cache-interceptor';

const baseURL = 'http://localhost:8080';

const client = setupCache(axios, {
  storage: buildWebStorage(localStorage, 'axios-cache:'),
});

export interface MovieType {
  id: string;
  title: string;
  description: string;
  director: string;
  year: number;
  coverImage: string;
  totalData: number;
}

interface getMoviesProps {
  searchTerm?: string;
}

interface getPageProps {
  pageNumber: number;
  searchTerm?: string;
}

async function getMovies({
  searchTerm = '',
}: getMoviesProps): Promise<{ movies: MovieType[]; totalPages: number }> {
  const response = await client.get<MovieType[]>(
    `${baseURL}/movies?${searchTerm ? `title_like=${searchTerm}` : ''}`
  );
  const movies = response.data.slice(0, 4) as MovieType[];
  const totalPages = Math.ceil(response.data.length / 4);
  return { movies, totalPages };
}

async function getPage({
  pageNumber,
  searchTerm = '',
}: getPageProps): Promise<{ movies: MovieType[] }> {
  const response = await client.get<MovieType[]>(
    `${baseURL}/movies?${
      searchTerm ? `title_like=${searchTerm}&` : ''
    }_limit=4&_page=${pageNumber}`
  );
  const movies = response.data as MovieType[];
  return { movies };
}

export const api = {
  getMovies,
  getPage,
};
