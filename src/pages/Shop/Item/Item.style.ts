import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 3rem auto;

  .image-wrap{
    width: 200px;
    height: 150px;
    display: grid;
    align-items: center;
  }
  img {
    width: 200px;
    height: 150px;
    margin: 0 auto;
    transition: all 0.2s ease;
  }
  img:hover{
    transform: scale(1.1)
  }
  .details{
    margin-top: 0.8rem;
    height: 10rem;
    width: 70%;
  }
  .details h3{
    font-size: 1rem;
    color: gray;
    font-weight: 300;
  }
  .details h4{
    font-size: 1.3rem;
    color: #f08080;
    margin: 0;
  }
  .add-button{
    color: white;
    background-color: gray;
    border: none;
    padding: 1rem 2rem;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .add-button:hover{
    background-color: transparent;
    color: gray;
    border: 2px solid gray;
  }

  @media screen and (min-width: 768px){

  }

  @media screen and (min-width: 1024px){
    .image-wrap{
      width: 350px;
      height: 300px;
    }
    img {
      width: 300px;
      height: 250px;
    }
    .details{
      margin-top: 2rem;
    }
  }
`;