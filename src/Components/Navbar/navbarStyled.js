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

`

