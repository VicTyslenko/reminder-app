import * as S from "./styles";
import { DefaultInputProps } from "./models";
import SearchIcon from "assets/icons/search-icon.svg?react";
export const DefaultInput = ({ searchIcon = false, labelText, ...props }: DefaultInputProps) => {
  return (
    <S.InputWrapp>
      {labelText && <S.Label>{labelText}</S.Label>}
      <S.InputInner className={"default-input " + props.className} {...props}></S.InputInner>
      {searchIcon && <SearchIcon className="search-icon" />}
    </S.InputWrapp>
  );
};
