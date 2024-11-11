import styled from "styled-components";

export const SidebarWrapp = styled.div`
  flex: 1;
  background-color: rgba(38, 38, 44, 0.5);
  border-radius: inherit;
  padding: 50px 10px;

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
  & .default-input {
    padding-left: 30px;
  }
`;
