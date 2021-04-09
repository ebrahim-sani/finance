import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 100px;
  margin-top: 100px;

  @media (max-width: 960px) {
    margin: 0 50px;
    margin-top: 70px;
  }

  @media (max-width: 760px), (max-width: 680px) {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    margin-top: 70px;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  margin-left: 32px;

  @media (max-width: 960px), (max-width: 760px), (max-width: 680px) {
    margin: 0;
  }

  span {
    font-weight: 550;
    margin-bottom: 12px;
  }
  h2 {
    font-size: 3rem;
    line-height: 3.3rem;
  }
  p {
    line-height: 25px;
  }

  @media (max-width: 960px) {
    margin-right: 20px;
  }
`;

export const Image = styled.div`
  display: flex;
  flex: 0.5;
  margin-right: 32px;
`;

// export const Buttons = styled.div``;
