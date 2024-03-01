import { Slider } from "@mui/material";
import styled from "styled-components";

export const SliderRed = styled(Slider)`
  color: #ef2a39;
  width: 160px;

  & .MuiSlider-thumb {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: red;
    margin-left: -6px; /* Ajuste para centralizar horizontalmente o polegar */
    &:hover {
      width: 20px; /* Ajuste para o tamanho do polegar durante o hover */
      height: 20px;
    }

    & .MuiSlider-rail {
      height: 8px; /* Ajusta a altura da linha do controle deslizante */
      border-radius: 4px; /* Arredonda as pontas da linha */
    }

    & .MuiSlider-track {
      height: 16px; /* Ajusta a altura da linha preenchida do controle deslizante */
      border-radius: 4px; /* Arredonda as pontas da linha preenchida */
    }
  }
`;

export const Label = styled.p`
  color: #3c2f2f;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Indicator1 = styled.p`
  font-weight: 500;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  color: #1cc019;
`;
export const Indicator2 = styled.p`
  font-weight: 500;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  color: #ef2a39;
`;
