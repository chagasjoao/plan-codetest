import styled from "styled-components";
import { shade } from "polished";
import { FiEdit, FiTrash2, FiX, FiPlus, FiList } from "react-icons/fi";

export const OrderIcon = styled(FiList)`
  font-size: 24px;
  color: #000;
  transition: 0.2s;
  :hover {
    color: #c53030;
    cursor: pointer;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const CancelIcon = styled(FiX)`
  font-size: 24px;
  color: #000;
  transition: 0.2s;
  :hover {
    color: #c53030;
    cursor: pointer;
  }
`;

export const AddFeatureIcon = styled(FiPlus)`
  margin-top: 8px;
  font-size: 20px;
  color: #000;
  transition: 0.2s;
  :hover {
    color: #04d361;
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(FiTrash2)`
  font-size: 24px;
  margin-left: 8px;
  color: #000;
  transition: 0.2s;
  :hover {
    color: #c53030;
    cursor: pointer;
  }
`;

export const EditIcon = styled(FiEdit)`
  font-size: 24px;
  color: #000;
  transition: 0.2s;
  :hover {
    color: #87ceeb;
    cursor: pointer;
  }
`;

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
  display: grid;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

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

export const PlanNameInput = styled.input`
  max-width: 200px;
  font-size: 28px;
  border-radius: 5px;
  border: 1px solid #808080;
  text-align: center;
`;

export const PlanPriceInput = styled.input`
  margin-top: 12px;
  max-width: 200px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #808080;
  text-align: center;
`;

export const PlanFeaturesInput = styled.input`
  display: block;
  margin-top: 4px;
  padding: 5px;
  max-width: 200px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #808080;
  text-align: left;
`;

export const Form = styled.form`
  display: grid;
`;
