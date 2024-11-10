import styled from "styled-components";

export const NewListWrapp = styled.div`
  width: 500px;
  height: 280px;
`;

export const NewListInner = styled.div`
  & .search-icon {
    width: 15px;
    height: 15px;
  }
  & .default-typography {
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }
`;
