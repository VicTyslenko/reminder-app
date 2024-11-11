import * as S from "./styles";
import { ListItem } from "../list-item/list-item";
import { useStoreSelector } from "shared/hooks/global/use-store-selector";
import { DefaultTypography } from "shared/components/default-typography";

import { useState } from "react";

export const MainList = () => {
  const list = useStoreSelector((state) => state.list.listInfo);

  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleSelectItem = (id: string) => {
    setSelectedItemId(id);
  };
  if (list.length > 0) {
    return (
      <S.MainListWrapp>
        <DefaultTypography>My lists</DefaultTypography>
        {list.map((item) => (
          <ListItem title={item.title} key={item.id} list={list} isSelected={selectedItemId === item.id} onSelect={() => handleSelectItem(item.id)} />
        ))}
      </S.MainListWrapp>
    );
  }
};
