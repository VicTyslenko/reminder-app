import styled from "styled-components";

export const ModalOverlay = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalInner = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 18px;
  background-color: #1b1a1a;
`;
