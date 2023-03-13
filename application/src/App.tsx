import { ThemeProvider } from 'styled-components';
import * as S from './styles/global';
import { Header } from './components/Header';
import { MovieCatalog } from './components/MovieCatalog';
import { DarkTheme } from './styles/themes/Dark';
import { MovieType } from './api/api';
import { DataProvider } from './context/useDataContext';

interface DataProps {
  movies: MovieType[];
  pageNumber: number;
  searchTerm: string;
  totalPages: number;
}

function App() {
  const initialData = {
    movies: [] as MovieType[],
    pageNumber: 1,
    searchTerm: '',
    totalPages: 1,
  };
  return (
    <DataProvider<DataProps> initialData={initialData}>
      <ThemeProvider theme={DarkTheme}>
        <S.Container>
          <Header />
          <MovieCatalog />
        </S.Container>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
