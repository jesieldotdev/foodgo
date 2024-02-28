import { IconButton, InputBase } from "@mui/material";
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;

  .icon {
    fill: #3c2f2f;
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
  }
`;

export const SearchInput = styled(InputBase)`
  display: flex;
  align-items: center;
  padding: 8px;
  padding-right: 16px;
  color: #3c2f2f;
  border-radius: 16px;
  background-color: #f5f5f5;
  width: 100%;
`;

export const FilterButton = styled(IconButton)`
  background-color: #ef2a39;
  border-radius: 16px;
  width: 64px;
  height: 64px;
  margin-left: 8px;
`;
