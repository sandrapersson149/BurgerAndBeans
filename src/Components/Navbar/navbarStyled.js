import styled from 'styled-components';

export const StyledNav = styled.nav`
position: absolute;
width: 95vw;
margin: 5px auto ;
ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
}
a {
  text-decoration: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.51);
  color: #FC8621;
  margin: 0 40px;
  font-size: 30px;
  font-weight: 600;
}
a:hover {
  opacity: 0.6;
  text-decoration: underline;
}
h1{
  color: #F9E0AE;
  position: absolute;
  font-size: 100px;
  font-weight: 800;
  width: 30%;
  line-height: 75px;
  top: 70px;
  left: 80px;
  text-align: center;
  text-shadow: 2px 3px 4px rgba(99, 92, 82, 0.50);
}`