import React from 'react';

import { ComponentMeta } from '@storybook/react';
import { Search } from '.';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../../styles/themes/Dark';

export default {
  title: 'Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${(props) => props.theme.gray_700};
`;

export const Default = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <Search onChange={() => {}} onSearch={() => {}} value="" />
      </Container>
    </ThemeProvider>
  );
};
