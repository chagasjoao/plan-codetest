import styled from "styled-components";

import Switch from "react-switch";

export const Header = styled.div`
  width: 960px;
  margin: auto;

  a {
    color: #000;
    font-size: 16px;
  }

  h2 {
    color: #808080;
    font-family: "Dancing Script", cursive;
  }

  h1 {
    margin: 20px 0px;
    font-family: "Dancing Script", cursive;
  }
`;

export const DiscountContainer = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlansContainer = styled.div`
  gap: 20px;
  margin-top: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const DiscountTextContainer = styled.div`
  padding-top: 24px;
  p {
    margin-bottom: 4px;
  }
`;

export const DiscountText = styled.span`
  font-size: 16px;
  color: red;
  font-family: "Dancing Script", cursive;
  font-weight: 700;
`;

export const SwitchButton = styled(Switch)`
  margin: 0 20px;
`;
