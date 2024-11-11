import { useState } from "react";
import * as S from "./styles";
import ListIcon from "assets/icons/list-icon.svg?react";
import { DefaultTypography } from "shared/components/default-typography";
import { ListInfo } from "store/lists/models";

type Props = {
  title: string;

  list: ListInfo[];
  isSelected: boolean;
  onSelect: () => void;
};
export const ListItem = ({ title, isSelected, onSelect }: Props) => {
  return (
    <S.ListItemWrapp onClick={() => onSelect()} selected={isSelected}>
      <S.IconWrapp>
        <ListIcon />
      </S.IconWrapp>
      <DefaultTypography>{title}</DefaultTypography>
    </S.ListItemWrapp>
  );
};
