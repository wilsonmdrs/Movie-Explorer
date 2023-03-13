import { isError, useQuery } from 'react-query';
import { api, MovieType } from '../../api/api';
import { useDataContext } from '../../context/useDataContext';
import { MovieCard } from '../MovieCard';
import { Pagination } from '../Pagination';
import ScaleLoader from 'react-spinners/ScaleLoader';
import * as S from './MovieCatalog.styles';

export const MovieCatalog = () => {
  const { getValues, setValue } = useDataContext();
  const pageNumber = getValues('pageNumber');
  const searchTerm = getValues('searchTerm');
  const totalPages = getValues('totalPages') ?? 1;
  const { isLoading, isError, error } = useQuery(
    ['movies', searchTerm],
    async () => {
      const responseAllMovies = await api.getMovies({ searchTerm });
      const responsePaginatedMovies = await api.getPage({
        pageNumber,
        searchTerm,
      });
      setValue('movies', responsePaginatedMovies.movies);
      setValue('totalPages', responseAllMovies.totalPages);
    }
  );

  const movies = getValues('movies');

  const setMovies = async (_pageNumber: number) => {
    const searchTerm = getValues('searchTerm');
    const response = await api.getPage({ pageNumber: _pageNumber, searchTerm });
    setValue('movies', response.movies);
  };

  const onSelectPage = (page: number) => {
    setValue('pageNumber', page);
    setMovies(page);
  };

  const onNextPage = () => {
    if (pageNumber < totalPages) {
      setValue('pageNumber', pageNumber + 1);
      setMovies(pageNumber + 1);
    }
  };

  const onPreviousPage = () => {
    if (pageNumber > 1) {
      setValue('pageNumber', pageNumber - 1);
      setMovies(pageNumber - 1);
    }
  };

  return (
    <S.MovieCatalogContainer>
      <S.SearchResultContainer>
        {searchTerm && (
          <S.Text
            weight="medium"
            color="white"
          >{`Search result for: "${searchTerm}"`}</S.Text>
        )}
      </S.SearchResultContainer>
      {isLoading ? (
        <S.SpinnerContainer>
          <ScaleLoader color="#21A2F6" />
        </S.SpinnerContainer>
      ) : (
        <>
          <S.MovieContainer>
            {movies.length === 0 && (
              <S.TextContainer>
                <S.Text weight="medium" color="text_base">
                  {searchTerm && !isError && `No movies to show`}
                  {isError && `${error}`}
                </S.Text>
              </S.TextContainer>
            )}
            {movies?.map((movie: MovieType) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </S.MovieContainer>
        </>
      )}
      {totalPages > 1 && (
        <Pagination
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          onSelectPage={onSelectPage}
          pageNumber={pageNumber}
          totalPages={totalPages}
        />
      )}
    </S.MovieCatalogContainer>
  );
};
