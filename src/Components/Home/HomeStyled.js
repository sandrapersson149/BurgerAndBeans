import styled from 'styled-components';
import HeaderBurger from '../../Images/header_burger.jpg'

export const HomeStyled = styled.header`
width: 100%;
height: 85vh;
background: url(${HeaderBurger}) no-repeat;
background-size: cover;
background-position: 10% 20%;

button {
  font-size: 20px;
  font-weight: 800;
  position: absolute;
  top: 320px;
  left: 230px;
  background-color: #FC8621;
  border: none;
  color: #F9E0AE;
  text-transform: lowercase;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 1px rgba(43, 21, 5, 0.20);
}
`