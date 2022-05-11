import styled from "styled-components";

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

export const FormDiscountComponent = styled.form`
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
