import styled from "styled-components";
import { DefaultButton } from "shared/components/button";
export const NewListWrapp = styled.div`
  width: 500px;
  height: 100%;
  & .default-typography {
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

export const SearchInputWrapp = styled.div`
  margin-bottom: 30px;
`;
export const NewListInner = styled.div`
  & .search-icon {
    width: 15px;
    height: 15px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
`;

type Props = {
  disabled?: boolean;
};
export const ButtonsWrapp = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  & .default-button,
  .submit-button {
    background-color: #504e4e;
    padding: 0 10px;
    border-radius: 5px;

    width: 65px;
    height: 20px;
    font-weight: 300;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .submit-button {
    background-color: ${({ disabled }) => (disabled ? "#454545" : "#40c240")};
  }
`;


