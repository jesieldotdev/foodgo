import styled from "styled-components";

export const SummaryContainer = styled.div`
  .star {
    min-width: 16px;
    max-width: 16px;
    min-height: 16px;
    max-height: 16px;
    fill: #ff9633;
  }
`;

export const Title = styled.p`
  color: #3c2f2f;
  font-weight: 600;
  font-size: 24px;
`;
export const SubHeader = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 8px;
  color: #808080;
  font-weight: 500;
  font-size: 16px;
  font-family: "Regular", sans-serif;
`;

export const Rating = styled.p`
  margin-left: 4px;
  color: #808080;
`;
export const DeliveryTime = styled.p`
  margin-left: 8px;
  color: #808080;
`;

export const Description = styled.p`
  color: #6a6a6a;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
`;
