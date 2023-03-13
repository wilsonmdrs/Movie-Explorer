import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 70%;
  box-sizing: border-box;
  height: 40px;
  max-height: 40px;
  background-color: ${(props) => props.theme.gray_900};
  color: ${(props) => props.theme.text_base};
  font-size: 1rem;
  padding: 5px 2rem;
  border: 1px solid ${(props) => props.theme.gray_500};
  border-right: 0px;
  border-radius: 8px 0 0 8px;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  margin: 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  max-height: 40px;
  border: 1px solid ${(props) => props.theme.gray_500};
  border-left: 0px;
  border-radius: 0 8px 8px 0;
  background-color: ${(props) => props.theme.blue_first};
  color: ${(props) => props.theme.white};
`;
