import { ButtonBase } from "@mui/material";
import styled from "styled-components";

export const BottomItemsContainer = styled.div`
  width: 100%;
  padding: 16px;
`;
export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-left: 8px;
  margin-right: 8px;
`;

export const OrderButton = styled(ButtonBase)`
  background-color: #3c2f2f;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  padding: 16px 12px;
  border-radius: 16px;
  font-family: "Poppins", sans-serif;
`;

export const Price = styled.div`
  background-color: #ef2a39;
  font-family: "Poppins", sans-serif;
  align-items: center;
  display: flex;
  font-weight: 600;
  color: #fff;
  font-size: 24px;
  border-radius: 16px;
  padding: 16px 12px;
  border-radius: 16px;
  width: fit-content;
`;
