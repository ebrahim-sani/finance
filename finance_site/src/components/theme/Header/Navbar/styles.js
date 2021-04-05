import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px;

  @media (max-width: 960px) {
    margin: 0 50px;
  }
  @media (max-width: 768px), (max-width: 680px) {
    margin: 0 30px;
  }
`;

export const Brand = styled.a`
  h3 {
    color: #000000;
    font-weight: 600;
    font-size: 25px;
    /* margin-top: 20px; */
  }
`;
export const Buttons = styled.div`
  span {
    color: black;
    margin-right: 20px;
    font-weight: 600;
    cursor: pointer;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;
