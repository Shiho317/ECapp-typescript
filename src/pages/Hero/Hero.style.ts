import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100vw;
height: 100vh;
display: grid;
grid-template-rows: 1fr 7fr;
align-items: center;

.header{
  background-color: white;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  color: gray;
  font-size: 0.8rem;
  letter-spacing: 0.3rem;
}

.image-wrap img{
  width: 100%;
}

.title{
  text-align: center;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
  line-height: 1rem;
}

.title p{
  font-size: 0.8rem;
  color: gray;
  padding: 0 1rem;
}

.start-btn{
  text-align: center;
}

.start-btn button{
  padding: 0.8rem;
  background: gray;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.start-btn button:hover{
  background: white;
  border: 2px solid gray;
}


@media screen and (min-width: 768px){

}

@media screen and (min-width: 1024px){
  display: flex;
  flex-direction: column;
  align-items: start;
  
  .header{
  height: 7rem;
  padding: 0 3rem;
  letter-spacing: 0.5rem;
  font-size: 1rem;
  }

  .image-wrap{
  position: relative;
  }

  .title{
  position: absolute;
  bottom: 5rem;
  left: 3rem;
  color: white;
  line-height: 1.5rem;
  text-align: start;
  }

  .title h1{
  font-size: 3rem;
  }

  .title p{
  font-size: 1.5rem;
  color: white;
  }

  .start-btn{
  position: absolute;
  bottom: 5rem;
  right: 3rem;
  }

  .start-btn button{
  padding: 1rem 2rem;
  background: white;
  font-size: 1rem;
  font-weight: bold;
  color: black;
  }

  .start-btn button:hover{
  background: gray;
  color: white;
  border: none;
  }


}











`;