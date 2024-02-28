import styled from "styled-components";
import { Hamburgers } from "./components/Hamburgers";

export const SplashScreenContainer = styled.div`
  background: #e53935; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e35d5b,
    #e53935
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e35d5b,
    #e53935
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: normal;
  font-family: "Lobster", sans-serif;
  color: #ffffff;
  font-size: 64px;
`;
