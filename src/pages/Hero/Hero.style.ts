import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;


.header{
  background-color: white;
  height: 6rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 3rem;
  letter-spacing: 0.5rem;
  color: gray;
}

.image-wrap{
position: relative;
}

.image-wrap img{
  width: 100%;
}

.title{
  position: absolute;
  bottom: 5rem;
  left: 3rem;
  color: white;
  line-height: 1.5rem;
}

.title h1{
  font-size: 3rem;
}

.title p{
  font-size: 1.5rem;
}

.start-btn{
  position: absolute;
  bottom: 5rem;
  right: 3rem;
}

.start-btn button{
  padding: 1rem 2rem;
  background: white;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.start-btn button:hover{
  background: gray;
  color: white;
}


`;