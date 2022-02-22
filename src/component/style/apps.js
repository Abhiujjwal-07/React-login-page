import styled from "styled-components";

export const Fullbody = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Box1 = styled.div`
margin-top: 30%;
width: 190px;

  .aa {
    height: 20px;
    width: 100%;
    margin-left: -10px;
    border: 2px solid grey;
    border-radius: 30px;
  }
  .bb {
    width: 100%;
    height: 20px;
    margin-left: -10px;
    border: 2px solid grey;
    border-radius: 30px;

  }
`;

export const Registra = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  .signup1 {
    height: 20px;
    width: 150%;
    margin-left: -40px;
    border: 2px solid grey;
    border-radius: 30px;
  }
  .signup2 {
    width: 150%;
    height: 20px;
    margin-left: -40px;
    border: 2px solid grey;
    border-radius: 30px;
  }
`;

export const Button = styled.div`
  padding-top: 2%;

  .cc {
    width: 50%;
    margin-left: 30%;
  }
`;
