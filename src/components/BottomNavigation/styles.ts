import { BottomNavigationAction, IconButton } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import styled from "styled-components";

export const BottomNavContainer = styled(BottomNavigation)`
  /* border-radius: 46px; */
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #ef2a39;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;

  gap: 16px;
  /* overflow: hidden; */
  padding: 12px;
  .root {
    height: 100%;
    width: 100%;
  }

  .icon {
    width: 28px;

    fill: #fff;
  }

  .item {
    padding: 12px;
    border-radius: 12px;
  }

  .on {
    fill: #fff;

    .custom_label {
      display: none;
    }
  }
  .custom_label {
    color: #fefefe;
    font-size: 12px;
    display: none;
  }
`;

export const FloatingActionButton = styled(IconButton)`
  padding: 24px;
  background: #ef2a39;
  border-radius: 50%;
  align-self: center;
  justify-self: center;
  display: flex;
  transform: translate(-16%, -16%);

  &:hover {
    background: #ef2a39;
  }
`;

export const FloatActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -8%);
  z-index: 1;
  filter: box-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));

`;

// export const FloatingActionButton = styled(BottomNavigationAction)(({ theme }) => ({
//   position: 'absolute',
//   bottom: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#EF2A39',
//   borderRadius: '50%',
//   zIndex: 1,
//  }));
