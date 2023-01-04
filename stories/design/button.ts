import { css } from "styled-components";

export const button = css`
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.palette.primary.main};
  border-color: ${(props) => props.theme.palette.primary.main};
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const buttonText = css`
  font-size: 16px;
  color: #fff;
`;
