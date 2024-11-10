import { useDispatch } from "react-redux";
import { RootDispatch } from "store/storage";

export const useStoreDispatch = () => useDispatch<RootDispatch>();
