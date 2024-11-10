import { useStoreDispatch } from "shared/hooks/global/use-store-dispatch";
import { setModalWindow } from "store/modals";
import { NewListComponent } from "./extensions/new-list/new-list-component";

export const useSidebar = () => {
  const dispatch = useStoreDispatch();

  
  const handleModalOpen = () => {
    dispatch(setModalWindow(<NewListComponent />));
  };

  return { handleModalOpen };
};
