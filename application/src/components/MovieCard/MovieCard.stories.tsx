import { ComponentMeta } from '@storybook/react';
import { MovieCard } from '.';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../styles/themes/Dark';
import { DataProvider } from '../../context/useDataContext';

export default {
  title: 'MovieCard',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  padding: 20px;
  background-color: ${(props) => props.theme.gray_900};
`;

const data = {
  id: 'movie-1',
  title: 'Aliquam tempore vero',
  director: 'Mercedes Marvin I',
  description:
    'Fugit explicabo repudiandae. Quia maxime quos nobis ut sit placeat est. Quod dolorem quaerat. Exercitationem asperiores voluptates itaque iure facilis consectetur labore voluptate.',
  year: 2013,
  coverImage: 'http://placeimg.com/640/480/business',
};

export const Default = () => {
  const queryClient = new QueryClient();
  const totalPages = 30;
  const pageNumber = 6;

  return (
    <DataProvider initialData={{ totalPages, pageNumber }}>
      <ThemeProvider theme={DarkTheme}>
        <QueryClientProvider client={queryClient}>
          <Container>
            <MovieCard {...data} />
          </Container>
        </QueryClientProvider>
      </ThemeProvider>
    </DataProvider>
  );
};
