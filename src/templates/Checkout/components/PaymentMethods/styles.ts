import { ButtonBase } from "@mui/material";
import styled from "styled-components";

interface PaymentCardProps {
  active?: boolean;
}

export const PaymentMethodsContainer = styled.div``;

export const Title = styled.p`
  font-weight: 600;
  color: #3c2f2f;
  font-size: 20px;
`;

export const PaymentCard = styled(ButtonBase)<PaymentCardProps>`
  width: 100%;
  background-color: ${(props) => (props.active ? "#3c2f2f" : "#F3F4F6")};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div<PaymentCardProps>``;
export const Label = styled.p<PaymentCardProps>`
  color: ${(props) => (props.active ? "#FFFFFF" : "#3C2F2F")};
  text-align: left;
`;
export const Value = styled.p<PaymentCardProps>`
  color: #808080;
`;
