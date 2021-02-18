import styled from "styled-components";

export default styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: ${({ col }) => col};
`;
