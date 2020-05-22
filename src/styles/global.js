import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body{
    background: linear-gradient(-6deg,rgba(25,25,25,1) 65%,rgba(0,0,0,1) 65%) no-repeat;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button{
    font: 14px Roboto, sans-serif;
  }
  
  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 0px 20px 50px;
  }
  
  button{
    cursor: pointer;
  } 
`;