import { ComponentMeta } from '@storybook/react';
import { Pagination } from '.';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../styles/themes/Dark';
import { useState } from 'react';

export default {
  title: 'Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  background-color: ${(props) => props.theme.gray_900};
`;

export const Default = () => {
  const totalPages = 30;
  const [pageNumber, setPageNumber] = useState<number>(6);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <Pagination
          onNextPage={() =>
            pageNumber < totalPages && setPageNumber(pageNumber + 1)
          }
          onPreviousPage={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}
          onSelectPage={(page) => pageNumber > 1 && setPageNumber(page)}
          pageNumber={pageNumber}
          totalPages={totalPages}
        />
      </Container>
    </ThemeProvider>
  );
};
