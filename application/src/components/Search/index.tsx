import * as S from './Search.styles';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';

export interface SearchProps {
  onChange: (value: string) => void;
  onSearch: () => void;
  value: string;
}

export const Search = ({
  onChange = (value) => {},
  onSearch = () => {},
  value = '',
}: SearchProps) => {
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch();
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [onSearch]);
  return (
    <S.SearchContainer>
      <S.SearchInput
        value={value}
        onKeyDown={(e) => e.code === 'Enter' && onSearch()}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type to search a movie"
        name="search-input"
      />
      <S.SearchButton onClick={onSearch}>
        <SearchIcon fontSize={'medium'} />
      </S.SearchButton>
    </S.SearchContainer>
  );
};
