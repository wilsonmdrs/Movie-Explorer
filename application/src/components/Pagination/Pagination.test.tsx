import { render, screen } from '@testing-library/react';
import { Pagination } from '.';

describe('Pagination', () => {
  const onSelectPageMock = jest.fn();
  const onNextPageMock = jest.fn();
  const onPreviousPageMock = jest.fn();

  beforeEach(() => {
    onSelectPageMock.mockClear();
    onNextPageMock.mockClear();
    onPreviousPageMock.mockClear();
  });

  it('renders arrows, first and last page when total pages > 1', () => {
    render(
      <Pagination
        totalPages={2}
        pageNumber={1}
        onSelectPage={onSelectPageMock}
        onNextPage={onNextPageMock}
        onPreviousPage={onPreviousPageMock}
      />
    );

    const nextButton = screen.getByRole('button', { name: /next/ });
    const previousButton = screen.getByRole('button', { name: /previous/ });

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders the first, second, and last pages when there are 3 total pages', () => {
    render(
      <Pagination
        totalPages={3}
        pageNumber={1}
        onSelectPage={onSelectPageMock}
        onNextPage={onNextPageMock}
        onPreviousPage={onPreviousPageMock}
      />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('renders first, second, last, and second to last pages when there are 4 total pages', () => {
    render(
      <Pagination
        totalPages={4}
        pageNumber={1}
        onSelectPage={onSelectPageMock}
        onNextPage={onNextPageMock}
        onPreviousPage={onPreviousPageMock}
      />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders first, second, third, last, and second to last pages when there are 5 total pages', () => {
    render(
      <Pagination
        totalPages={5}
        pageNumber={1}
        onSelectPage={onSelectPageMock}
        onNextPage={onNextPageMock}
        onPreviousPage={onPreviousPageMock}
      />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders first, second, third, last, and second to last pages when there are 6 total pages', () => {
    render(
      <Pagination
        totalPages={6}
        pageNumber={1}
        onSelectPage={onSelectPageMock}
        onNextPage={onNextPageMock}
        onPreviousPage={onPreviousPageMock}
      />
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
