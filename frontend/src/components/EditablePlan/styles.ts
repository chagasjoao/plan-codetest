import styled from "styled-components";
import { shade } from "polished";

export const CardContainer = styled.div`
  padding: 20px;
  height: 100%;
  min-height: 400px;
  min-width: 250px;
  border: 1px solid #808080;
  border-radius: 10px;
  display: grid;
`;

export const TitleWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 40px;
`;

export const Title = styled.span`
  text-align: center;
  font-size: 28px;
`;

export const Price = styled.span`
  text-align: center;
  font-size: 18px;
`;

export const PriceWithDiscount = styled.div`
  text-align: center;
  font-size: 18px;

  p + p {
    margin-top: 16px;
    color: red;
    text-decoration: line-through;
  }
`;

export const FeaturesWrapper = styled.div`
  margin-top: 40px;

  border-left: 2px solid #04d361;

  padding: 8px;

  p {
    margin-top: 4px;
    font-size: 16px;
  }
`;

export const SubscribeButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 30px;
  background: #04d361;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;
  align-self: flex-end;

  &:hover {
    background: ${shade(0.2, "#04d361")};
  }
`;
