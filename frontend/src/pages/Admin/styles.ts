import styled from "styled-components";

export const AddWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  span {
    :hover {
      color: #04d361;
      cursor: pointer;
    }
  }
`;

export const Header = styled.div`
  width: 960px;
  margin: auto;
  h2 {
    color: #808080;
    font-family: "Dancing Script", cursive;
  }

  h1 {
    margin-top: 20px;
    font-family: "Dancing Script", cursive;
  }
`;

export const DiscountContainer = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlansContainer = styled.div`
  gap: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
