import Image from "next/image";
import styled from "styled-components";

export const HeaderContainer = styled.div``;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const LeftItems = styled.div`
`;

export const Title = styled.p`
  font-size: 46px;
  font-weight: normal;
  font-family: "Lobster", sans-serif;
  color: #3c2f2f;
  justify-self: baseline;
  padding: 0px;
  margin-top: -8px;
`;

export const Message = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #6a6a6a;
`;

export const AvatarContainer = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  width: 64px;
  height: 64px;
`;

export const RightAvatar = styled(Image)`
  border-radius: 32px;
`;
