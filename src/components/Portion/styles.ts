import { IconButton } from "@mui/material";
import styled from "styled-components";

export const PortionContainer = styled.div`
  width: 100%;
  width: 140px;
  user-select: none;

  .icon {
    fill: #fff;
    min-width: 24px;
    max-width: 24px;
    min-height: 24px;
    max-height: 24px;
  }
`;

export const Label = styled.p`
  color: #3c2f2f;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(IconButton)`
  background-color: #ef2a39;
  border-radius: 8px;
  /* padding: 12px; */
  width: 40px;
  height: 40px;
  &:hover {
    background-color: #ef2a39;
  }
`;


export const Value = styled.p`
font-size: 24px;
font-weight: 600;
font-family: 'Regular', sans-serif;
color: #3C2F2F;
`