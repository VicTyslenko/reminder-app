import * as S from "./styles";
import { DefaultButton } from "shared/components/button/button";
import AddIcon from "assets/icons/add-icon.svg?react";
import { DefaultTypography } from "shared/components/default-typography";
import { useSidebar } from "./hooks";
import { SearchInput } from "./extensions/search-input/search-input";
import { MainList } from "./extensions/main-list/main-list";
export const Sidebar = () => {
  const { handleModalOpen } = useSidebar();
  return (
    <S.SidebarWrapp>
      <SearchInput />

      <MainList/>
      <DefaultButton onClick={() => handleModalOpen()}>
        <AddIcon />
        <DefaultTypography>Add list</DefaultTypography>
      </DefaultButton>
    </S.SidebarWrapp>
  );
};
