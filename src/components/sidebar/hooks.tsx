import { useStoreDispatch } from "shared/hooks/global/use-store-dispatch";
import { setModalWindow, closeModalWindow } from "store/modals";
import { NewListComponent } from "./extensions/new-list-component/new-list-component";

export const useSidebar = () => {
  const dispatch = useStoreDispatch();

  const handleModalOpen = () => {
    dispatch(
      setModalWindow(<NewListComponent />, {
        controls: {
          onSubmit: () => null,
          onCancel: () => null,
        },
      })
    );
  };

  const handleModalClose = () => {
    dispatch(closeModalWindow());
  };
  return { handleModalOpen, handleModalClose };
};



export const useAddNewList = () => {
  
  const handleAddList = () => {};

  return { handleAddList };
};
