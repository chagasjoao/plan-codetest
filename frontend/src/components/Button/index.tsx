/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled, { css } from "styled-components";
import { shade } from "polished";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const CustomButton = styled.button<ButtonProps>`
  width: 100%;
  height: 40px;
  background: #04d361;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;

  &:hover {
    background: ${shade(0.2, "#04d361")};
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #777;
      cursor: not-allowed;
    `}
`;

export default function Button({ children, ...props }: ButtonProps) {
  return <CustomButton {...props}>{children}</CustomButton>;
}
