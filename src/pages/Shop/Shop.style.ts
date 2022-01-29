import styled from 'styled-components';

export const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins:wght@200;300&display=swap');
  position: relative;
  color: black;
  box-sizing: border-box;
  font-family: 'Abril Fatface', cursive;
  font-family: 'Poppins', sans-serif;
  
  .header{
    background-color: #e6e6fa;
    width: 100%;
    height: 4rem;
    background-color: rgb(128, 128, 128, 0.5);
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .header-logo{
    width: 4rem;
    height: 4rem;
    display: grid;
    align-items: center;
    margin: 0 2rem;
    color: white;
  }
  .cart-icon{
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    margin: 0;
    cursor: pointer;
    color: white;
  }
  .main{
    margin-top: 3rem;
  }
  .title{
    font-size: 1.2rem;
    text-align: center;
    color: gray;
  }

  @media screen and (min-width: 768px){
  .header-logo{
    margin: 0 2rem;
  }

  }

  @media screen and (min-width: 1024px){

    .header{
      height: 5rem;
    }

    .header-logo{
    width: 5rem;
    height: 5rem;
    margin: 0 4rem;
    }

    .cart-icon{
      width: 5rem;
      height: 5rem;
    }

    .title{
      font-size: 2rem;
    }

  }
`;