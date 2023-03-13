import * as S from './MovieCard.styles';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

interface MovieProps {
  id: string;
  title: string;
  description: string;
  director: string;
  year: number;
  coverImage: string;
}
export const MovieCard = ({
  title,
  description,
  director,
  year,
  coverImage,
}: MovieProps) => {
  return (
    <S.MovieCard>
      <S.MovieCoverImage src={coverImage} />
      <S.TitleContainer>
        <LocalMoviesIcon />
        <S.MovieTitle>{title}</S.MovieTitle>
      </S.TitleContainer>
      <S.MovieYear>{year}</S.MovieYear>
      <S.MovieDescription>{description}</S.MovieDescription>
      <S.MovieDirector>{`Director: ${director}`}</S.MovieDirector>
    </S.MovieCard>
  );
};
