import styled from 'styled-components';

export const MovieCatalogContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88%;
  padding: 10px 10px 0px 10px;
`;
export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.gray_900};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.gray_900};
`;

export const SearchResultContainer = styled.div`
  display: flex;
  align-items: center;
  height: 5%;
  padding: 1.5rem 2rem;
`;

export const MovieContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;
  height: 80%;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    overflow: scroll;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface TextProps {
  color?: string;
  weight?: string;
  size?: string;
  padding?: string;
  margin?: string;
}
export const Text = styled.p<TextProps>`
  padding: ${(props) => props.padding ?? 0};
  margin: ${(props) => props.margin ?? 0};
  color: ${(props) => props.theme[props.color ?? 'text_base']};
  font-weight: ${(props) => props.weight ?? 300};
  font-size: ${(props) => props.size ?? '1rem'};
`;
