import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "store/storage";

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
