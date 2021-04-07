import styled from "styled-components";

export const Wrapper = styled.div`
  background: whitesmoke;
  height: 100vh;
`;
export const InnerComponent = styled.div`
  margin: 100px 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 3px 6px 3px rgba(0, 0, 0, 0.3);

  span {
    margin: 10px 0 14px 6px;
    cursor: pointer;
    text-decoration: underline;
  }

  @media (min-width: 960px) {
    margin: 100px 400px;
  }
  @media (max-width: 960px) {
    margin: 100px 250px;
  }
  @media (max-width: 760px) {
    margin: 100px 150px;
  }
  @media (max-width: 680px) {
    margin: 100px 50px;
  }
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
`;
export const Tag = styled.h4`
  color: black;
  margin-bottom: 0;
`;
export const Input = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 20px;
    margin: 10px 0;
    border-radius: 30px;
    border: none;
    background: whitesmoke;
  }
`;
export const Logo = styled.h3`
  color: black;
  margin-bottom: 0;
`;
export const Quest = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 15px 0 14px 6px;
    cursor: pointer;
  }
  span {
    margin-left: 5px;
    text-decoration: underline;
    color: black;
  }
`;
