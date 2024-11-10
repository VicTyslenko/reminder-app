import { ReactNode } from "react";

export type ModalWindowMeta = {
  controls?: {
    onSubmit: () => void;
    onCancel: () => void;
  };
};

export interface InitialStateProps extends ModalWindowMeta {
  isOpen: boolean;
  children: ReactNode;
}
