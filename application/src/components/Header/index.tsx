import { useCallback, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useDataContext } from '../../context/useDataContext';
import { Search } from '../Search';
import * as S from './Header.styles';

export const Header = () => {
  const { setValue, getValues } = useDataContext();
  const [searchTerm, setSearchTerm] = useState(getValues('searchTerm') ?? '');
  const queryClient = useQueryClient();
  const handleSearchTerm = useCallback(() => {
    setValue('searchTerm', searchTerm);
    setValue('pageNumber', 1);
    queryClient.invalidateQueries(['movies', searchTerm]);
  }, [searchTerm, setValue, queryClient]);

  return (
    <S.HeaderContainer>
      <Search
        onSearch={handleSearchTerm}
        onChange={(term) => setSearchTerm(term)}
        value={searchTerm}
      />
    </S.HeaderContainer>
  );
};
