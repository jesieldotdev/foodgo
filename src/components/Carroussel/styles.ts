import { ButtonBase } from "@mui/material";
import styled from "styled-components";

interface ItemProps {
  active?: boolean | string;
}

export const CarrousselContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled(ButtonBase)<ItemProps>`
  background-color: ${(props) => (props.active ? "#ef2a39" : "#F3F4F6")};
  color: ${(props) => (props.active ? "#f5f5f5" : "#6A6A6A")};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 24px;
  border-radius: 32px;
`;
