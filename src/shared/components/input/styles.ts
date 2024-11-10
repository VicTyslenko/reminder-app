import styled from "styled-components";

export const InputWrapp = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;

  & .search-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 6px;
  }
  & path {
    fill: #fff;
  }
`;

export const InputInner = styled.input`
  border-radius: 6px;
  width: 100%;
  height: 30px;
  padding: 0 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
  background-color: transparent;
  border: 1px solid #d9d9d9;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
`;
