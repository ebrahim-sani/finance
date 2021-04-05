import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  background: #fff;
  padding: 2rem 0;
  box-shadow: 0px 4px 7px 3px rgba(0, 0, 0, 0.2);
`;
export const InnerComponents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 100px;
`;
export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-space-evenly;

  span {
    margin-left: 10px;
    font-weight: 523;
    font-size: 1.2rem;
  }
`;
