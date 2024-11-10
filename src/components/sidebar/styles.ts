import styled from "styled-components";

export const SidebarWrapp = styled.div`
  flex: 1;
  background-color: rgb(98 98 219);
  border-radius: inherit;

  & .default-button {
    position: absolute;
    bottom: 0;
    path {
      fill: #fff;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
  & .default-typography {
    color: #fff;
    font-weight: 200;
  }
`;
