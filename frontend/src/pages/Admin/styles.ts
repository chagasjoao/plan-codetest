import styled from "styled-components";
import { FiTrash2, FiEdit } from "react-icons/fi";

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

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

export const Text = styled.p`
  font-size: 20px;
`;

export const DiscountTextContainer = styled.div`
  padding-top: 24px;
  p {
    margin-bottom: 4px;
  }
`;

export const FormDiscount = styled.form`
  margin-top: 32px;
  display: flex;
  align-items: center;

  label {
    font-size: 16px;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    padding: 8px 12px;
    margin-left: 16px;
    border: 1px solid #777;
    border-radius: 4px;
  }
`;
