import * as S from "./styles";
import { useStoreSelector } from "shared/hooks/global/use-store-selector";
export const Modal = () => {
  const body = useStoreSelector((state) => state.modal);

  if (body?.isOpen)
    return (
      <S.ModalOverlay>
        <S.ModalInner>{body.children}</S.ModalInner>
      </S.ModalOverlay>
    );
};
