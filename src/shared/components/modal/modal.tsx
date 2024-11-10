import * as S from "./styles";
import { DefaultButton } from "../button/button";
import { useStoreSelector } from "shared/hooks/global/use-store-selector";
import { useSidebar } from "components/sidebar/hooks";
export const Modal = () => {
  const body = useStoreSelector((state) => state.modal);

  if (body?.isOpen)
    return (
      <S.ModalOverlay>
        <S.ModalInner>{body.children}</S.ModalInner>
      </S.ModalOverlay>
    );
};
