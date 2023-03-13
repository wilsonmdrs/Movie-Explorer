import { render, screen } from '@testing-library/react';
import { MovieCard } from '.';

describe('MovieCard component', () => {
  it('renders correctly', () => {
    const movie = {
      id: '1',
      title: 'Test Movie',
      description: 'A movie for testing purposes',
      director: 'Test Director',
      year: 2022,
      coverImage: 'test_image.png',
    };
    render(<MovieCard {...movie} />);
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.year.toString())).toBeInTheDocument();
    expect(screen.getByText(movie.description)).toBeInTheDocument();
    expect(screen.getByText(`Director: ${movie.director}`)).toBeInTheDocument();
    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });
});
