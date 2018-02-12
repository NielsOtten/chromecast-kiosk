import styled from 'styled-components';
import Card from 'material-ui/Card';

export default styled(Card)`
  width: calc(25% - 40px);
  margin: 20px;
  box-sizing: border-box;
  cursor: pointer;
  
  @media only screen and (max-width: 960px) {
    width: calc(33% - 40px);
    margin: 20px;
    box-sizing: border-box;
    cursor: pointer;
  } 
  
  @media only screen and (max-width: 680px) {
    width: calc(50% - 30px);
    margin: 15px;
  }
  
  @media only screen and (max-width: 380px) {
    width: 100%;
    margin: 10px;
  }
`;
