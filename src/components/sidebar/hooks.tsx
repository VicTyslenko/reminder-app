import { useStoreDispatch } from "shared/hooks/global/use-store-dispatch";

import { setModalWindow, closeModalWindow } from "store/modals";
import { NewListModal } from "./extensions/new-list-modal/new-list-modal";

export const useSidebar = () => {
  const dispatch = useStoreDispatch();

  const handleModalOpen = () => {
    dispatch(setModalWindow(<NewListModal />));
  };

  const handleModalClose = () => {
    dispatch(closeModalWindow());
  };
  return { handleModalOpen, handleModalClose };
};
