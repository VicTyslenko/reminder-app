import styled from "styled-components";
import { DefaultButton } from "shared/components/button";

export const ListItemWrapp = styled(DefaultButton)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ selected }) => (selected ? "#40c240" : "")};
  width: 100%;
`;

export const IconWrapp = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #235cd1;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 15px;
    height: 15px;
    fill: #fff;
  }
  & path {
    stroke: #fff;
  }
`;
