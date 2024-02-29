import { ButtonBase } from "@mui/material";
import styled from "styled-components";

export const GridItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 24px;

  .star,
  .heart {
    min-width: 24px;
    max-width: 24px;
    min-height: 24px;
    max-height: 24px;
  }

  .star {
    min-width: 16px;
    max-width: 16px;
    min-height: 16px;
    max-height: 16px;
    fill: #ff9633;
  }

  .active {
    fill: #ef2a39;
  }
  .inactive {
    fill: #3c2f2f;
  }

  color: #3c2f2f;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  border-radius: 16px;
`;
export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  justify-content: center;
  justify-self: center;
  filter: drop-shadow(0px 8px 5px rgba(0, 0, 0, 0.3));
`;

export const Title = styled.p`
  text-align: left;
  width: 100%;
  font-weight: 600;
  color: #3c2f2f;
  margin-top: 8px;
`;
export const Subtitle = styled.p`
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  width: 100%;
  font-weight: 400;
`;
export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;
export const Point = styled.p`
  font-weight: 500;
  margin-left: 8px;
`;
