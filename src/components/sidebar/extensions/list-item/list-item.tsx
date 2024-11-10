import * as S from "./styles";
import ListIcon from "assets/icons/list-icon.svg?react";
import { DefaultTypography } from "shared/components/default-typography";
export const ListItem = () => {
  return (
    <S.ListItemWrapp>
      <ListIcon />
      <DefaultTypography>List name</DefaultTypography>
    </S.ListItemWrapp>
  );
};
