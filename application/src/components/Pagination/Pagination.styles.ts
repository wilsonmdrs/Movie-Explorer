import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.gray_800};
`;

interface PaginationArrowProps {
  position: 'right' | 'left';
}

export const PaginationArrow = styled.button<PaginationArrowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 4px;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.blue};
  border: 2px solid ${(props) => props.theme.gray_800};
  background-color: ${(props) => props.theme.gray_700};
  &:hover {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.gray_800};
  }
  ${(props) => {
    if (props.position === 'left') {
      return `border-radius: 50px 0 0 50px`;
    }
    if (props.position === 'right') {
      return `border-radius: 0 50px 50px 0`;
    }
  }}
`;

interface PaginationPositionProps {
  selected?: boolean;
}
export const PaginationPosition = styled.button<PaginationPositionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${(props) => props.theme.blue};
  border: 2px solid ${(props) => props.theme.gray_800};
  background-color: ${(props) => props.theme.gray_700};
  &:hover {
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.gray_800};
  }
  ${(props) => {
    if (props.selected) {
      return `
        background-color: ${props.theme.blue};
        color: ${props.theme.gray_800};
    `;
    }
  }}
`;
