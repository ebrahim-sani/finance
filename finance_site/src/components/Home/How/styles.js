import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 100px;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin: 50px 30px 30px 30px;
  }
`;

export const Container = styled.div`
  text-align: center;

  p {
    padding: 0 250px;
    line-height: 25px;

    @media (max-width: 960px) {
      padding: 0 30px;
    }
    @media (max-width: 680px), (max-width: 768px) {
      padding: 0;
    }
  }

  span {
    margin-bottom: 20px;
    font-weight: 550;
  }

  h2 {
    font-size: 2.7rem;
  }
`;
