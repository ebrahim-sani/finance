import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 10px 50px 0 0;
  padding: 10px 10px 10px 17px;
  border-radius: 10px;
  box-shadow: 0px 3px 7px 4px rgba(0, 0, 0, 0.2);
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    justify-content: flex-end;
  }
  h4 {
    color: black;
  }
`;
export const Body = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
export const Recieved = styled.div`
  margin-bottom: 18px;
  p {
    font-weight: 600;
    color: gray;
    margin-bottom: 8px;
  }
  span {
    font-size: 1.4rem;
    color: green;
    font-weight: 600;
  }
`;
export const Spent = styled.div`
  p {
    font-weight: 600;
    color: gray;
    margin-bottom: 8px;
  }
  span {
    font-size: 1.4rem;
    color: red;
    font-weight: 600;
  }
`;
