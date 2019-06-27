import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 70px;
  box-sizing: border-box;
  padding: 20px;
  background-image: linear-gradient(
    to right top,
    #6a0f49,
    #7b2f6b,
    #884b8e,
    #9267b1,
    #9984d3,
    #968adb,
    #9290e2,
    #8e96e9,
    #8386d8,
    #7976c7,
    #6e66b7,
    #6457a6
  );
`;

export const Nav = styled.nav`
  width: 50%;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  justify-content: center;

  a {
    font-family: 'Quicksand', sans-serif;
    text-decoration: none;
    color: white;
    position: relative;
    margin-left: 10%;
    box-sizing: border-box;
    font-weight: 700;

    :before {
      content: '';
      position: absolute;
      top: 100%;
      bottom: 0;
      background: white;
      width: 0%;
      transition: 0.5s;
      height: 3px;
    }
    :hover:before {
      width: 100%;
      transform: translateY(100%);
    }
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  width: 50%;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: white;
  :before {
    content: '';
    position: absolute;
    top: 100%;
    bottom: 0;
    background: white;
    width: 0%;
    transition: 0.5s;
    height: 3px;
  }
  :hover:before {
    width: 100%;
    transform: translateY(100%);
  }
`;
