import Image from "next/image";
import styled from "styled-components";

export const HamburgersContainer = styled.div`
  display: flex;
  align-items: end;
  position: fixed;
  bottom: -32px;
  right: 32%;
`;

export const HamburgerImageContainer = styled.div`
  position: relative;
  width:   202px; // Ajuste conforme necessário
  height:   202px; // Ajuste conforme necessário
  margin-left: -64px;

  filter: drop-shadow(-10px  0  5px rgba(0,  0,  0,  0.6));
`;