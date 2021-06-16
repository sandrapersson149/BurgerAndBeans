import styled from 'styled-components';

export const StyledNav = styled.nav`
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}
li {
margin: 10px;
}
a {
  text-decoration: none;
  color: red;
}
a:hover {
  color: gray;
}
`