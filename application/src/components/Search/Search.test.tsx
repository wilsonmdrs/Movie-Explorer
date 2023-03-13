import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Search, SearchProps } from '.';

describe('Search', () => {
  const onChangeMock = jest.fn();
  const onSearchMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
    onSearchMock.mockClear();
  });

  it('should call onChange prop when input value changes', async () => {
    const inputValue = 'abcd';
    render(
      <Search onChange={onChangeMock} onSearch={onSearchMock} value={''} />
    );
    const searchInput = screen.getByPlaceholderText('Type to search a movie');
    user.type(searchInput, inputValue);
    expect(onChangeMock).toHaveBeenCalledTimes(4);
    expect(onChangeMock).toHaveBeenCalledWith('a');
    expect(onChangeMock).toHaveBeenCalledWith('b');
    expect(onChangeMock).toHaveBeenCalledWith('c');
    expect(onChangeMock).toHaveBeenCalledWith('d');
  });

  const defaultProps = {
    onChange: onChangeMock,
    onSearch: onSearchMock,
    value: '',
  };

  const component = (props: SearchProps = defaultProps) =>
    render(<Search {...props} />);

  it('should call onSearch prop when Search button is clicked', () => {
    component();

    const searchButton = screen.getByRole('button');
    user.click(searchButton);

    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });

  it('should call onSearch prop when Enter key is pressed', () => {
    component();

    const searchInput = screen.getByPlaceholderText('Type to search a movie');
    user.type(searchInput, '{enter}');

    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });

  it('should debounce onSearch prop with a 2000ms delay', async () => {
    jest.useFakeTimers();

    component();

    const searchInput = screen.getByPlaceholderText('Type to search a movie');
    user.type(searchInput, 'test');

    expect(onSearchMock).not.toHaveBeenCalled();

    jest.advanceTimersByTime(2000);

    expect(onSearchMock).toHaveBeenCalledTimes(1);
  });

  it('should render value when passed thought props', () => {
    const initialValue = 'Search Term';
    component({ ...defaultProps, value: initialValue });

    const searchInput = screen.getByPlaceholderText('Type to search a movie');

    expect(searchInput).toHaveValue(initialValue);
  });
});
