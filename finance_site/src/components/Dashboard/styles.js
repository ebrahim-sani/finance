import styled from "styled-components";

export const Wrapper = styled.div`
  background: whitesmoke;

  @media (max-width: 960px) {
    position: fixed;
  }
`;

export const Body = styled.div`
  display: flex;
  height: 100vh;
  margin: 0 100px;
`;
export const Sidebar = styled.div`
  display: flex;
  flex: 0.3;
`;

export const MainDash = styled.div`
  display: flex;
  flex: 0.7;
`;
