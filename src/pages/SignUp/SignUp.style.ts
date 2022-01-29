import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: #DCDCDC;
width: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;

h3{
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem 0 0 0;
}

.contents-wrap{
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem
}

.submit-btn a{
  text-decoration: none;
}

@media screen and (min-width: 768px){
  width: 70%;
}

@media screen and (min-width: 1024px){
  width: 40%;
}
`;