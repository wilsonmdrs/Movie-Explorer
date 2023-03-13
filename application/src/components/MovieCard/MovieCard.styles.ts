import styled from 'styled-components';

export const MovieCard = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 25%;
  min-width: 200px;
  height: fit-content;
  background-color: ${(props) => props.theme.gray_700};
  padding-bottom: 0.5rem;
  border-radius: 15px;
  box-shadow: 0px 0px 10px -1px ${(props) => props.theme.green_light};
`;
export const MovieCoverImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0 0;
`;
export const TitleContainer = styled.div`
  color: ${(props) => props.theme.green_light};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.5rem 0 0.5rem;
`;
export const MovieTitle = styled.p`
  color: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 0.875rem;
`;
export const MovieYear = styled.p`
  color: ${(props) => props.theme.blue};
  font-size: 0.625rem;
  padding: 5px 0.5rem;
`;
export const MovieDescription = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
  font-weight: 300;
  text-indent: 1.5rem;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const MovieDirector = styled.p`
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  color: ${(props) => props.theme.text_base};
  font-size: 0.75rem;
  font-weight: 500;
`;
