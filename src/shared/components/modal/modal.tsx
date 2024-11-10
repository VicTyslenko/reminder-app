import * as S from "./styles";
import { DefaultButton } from "../button/button";
import { useStoreSelector } from "shared/hooks/global/use-store-selector";
import { useSidebar } from "components/sidebar/hooks";
export const Modal = () => {
  const body = useStoreSelector((state) => state.modal);

  const { handleModalClose } = useSidebar();
  if (body?.isOpen)
    return (
      <S.ModalOverlay>
        <S.ModalInner>
          {body.children}

          {body.controls && (
            <S.ButtonsWrapp>
              <DefaultButton onClick={handleModalClose}>Cancel</DefaultButton>
              <DefaultButton className="submit-button">OK</DefaultButton>
            </S.ButtonsWrapp>
          )}
        </S.ModalInner>
      </S.ModalOverlay>
    );
};
