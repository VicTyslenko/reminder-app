import { DefaultInput } from "shared/components/input/default-input";
import { SearchInputWrapp } from "../styles";
export const SearchInput = () => {
  return (
    <SearchInputWrapp>
      <DefaultInput searchIcon placeholder="Search" />
    </SearchInputWrapp>
  );
};
