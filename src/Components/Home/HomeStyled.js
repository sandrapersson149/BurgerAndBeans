import styled from 'styled-components';
import HeaderBurger from '../../Images/header_burger.jpg'

export const Header = styled.header`
height: 85vh;
background: url(${HeaderBurger}) no-repeat;
background-size: cover;
background-position: 10% 20%;
`

export const HeaderContainer = styled.div`
display: flex;
justify-content: flex-start;
padding-top: 100px;
padding-left: 100px;
h1{
  color: #F9E0AE;
  font-size: 100px;
  font-weight: 800;
  line-height: 75px;
  text-align: center;
  text-shadow: 2px 3px 4px rgba(99, 92, 82, 0.50);
}
`

export const InfoSection = styled.section`
width: 80%;
margin: auto;
padding: 15px 0%;
div {
  display: flex;
}
h4 {
margin: 35px 0 0 0 ;
width: 100%;
text-align: left;
font-weight: 600;
font-size: 40px;
line-height: 63px;
color: #FFFFFF;
}
p {
margin: 0;
font-weight: 500;
font-size: 22px;
line-height: 33px;
color: #FFFFFF;
}
img{
  width: 550px;
  margin-left: 50px;
}
`

export const MenuSection = styled.section`
background-color: #F9E0AE;
padding-bottom: 40px;
h3 {
font-weight: 800;
font-size: 70px;
text-align: center;
text-transform: uppercase;
color: #FC8621;
margin-bottom: 0;
}
div {
display: flex;
justify-content: center;
align-items: center;
div {
  p {
    position: absolute;
    font-weight: 700;
    font-size: 43px;
    color: #EBEBEB;
    text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  }
  p:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  img {
  width: 300px;
  border-radius: 100%;
  opacity: 0.78;
  margin: 10px 30px;
}
}
}

`