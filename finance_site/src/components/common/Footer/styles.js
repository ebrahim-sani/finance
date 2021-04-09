import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
`;
export const Component = styled.div`
  margin: 0 100px;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin: 0 30px;
  }
`;
export const InnerComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  span {
    line-height: 26px;
    cursor: pointer;
    color: #fff;
  }
  /* span:hover {
    text-decoration: underline;
  } */
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  span {
    line-height: 26px;
    cursor: pointer;
    color: #fff;
  }
`;
export const EmailSub = styled.div``;
export const SocialLink = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 8px 10px;
    margin-bottom: 5px;
    border: none;
    background: #ededed;

    input::placeholder {
      color: black;
    }

    @media (max-width: 768px) {
      margin: 0 80px 5px 0;
    }
  }
`;
export const Icon = styled.div``;
export const Head = styled.h5`
  margin-top: 10px;
  color: white;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
  span:hover {
    text-decoration: underline;
  }
`;
export const Copyright = styled.div`
  text-align: center;
  background-color: black;
  padding: 0.7rem 2.3rem;

  span {
    color: #fff;
  }
`;
