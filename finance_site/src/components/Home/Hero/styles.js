import styled from "styled-components";

export const Wrapper = styled.div``;
export const InnerWrapper = styled.div`
  display: flex;
  margin: 0 100px;
  margin-top: 60px;

  @media (max-width: 960px) {
    margin: 0 50px;
    margin-top: 60px;
  }
  @media (max-width: 768px), (max-width: 680px) {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
    margin-top: 60px;
  }
`;

export const HeroImage = styled.div`
  display: flex;
  flex: 0.6;

  img {
    border-radius: 8px;
    filter: drop-shadow(1px 1px 1px #ededed);
  }

  @media (max-width: 960px) {
    flex: 0.5;
  }
`;
export const HeroIntro = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;

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
    flex: 0.5;
    margin-right: 20px;
  }
`;
export const Buttons = styled.div``;
export const ChartImg = styled.div`
  display: flex;
`;
export const FinanceImg = styled.div`
  display: flex;
`;
