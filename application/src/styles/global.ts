import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif; 
    }
    #root{
        padding: 0;
        margin:0;
        width: 100vw;
        height: 100vh;
    }
 `;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.gray_900};
`;
