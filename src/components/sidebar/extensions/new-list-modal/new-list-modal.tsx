import * as S from "../styles";
import { DefaultInput } from "shared/components/input/default-input";
import { DefaultTypography } from "shared/components/default-typography";
import { DefaultButton } from "shared/components/button";
import { useStoreDispatch } from "shared/hooks/global/use-store-dispatch";
import { useState } from "react";
import { setListInfo } from "store/lists";

export const NewListModal = () => {
  const [value, setValue] = useState("");
  const dispatch = useStoreDispatch();

  const handleAddItem = () => {
    const newItem = {
      title: value,
      id: Date.now().toString(),
    };

    setListInfo([newItem]);
  };
  return (
    <S.NewListWrapp>
      <DefaultTypography as="h1">New list</DefaultTypography>
      <S.NewListInner>
        <DefaultInput labelText="Name" onChange={(e) => setValue(e.target.value)} value={value} />

        <S.ButtonsWrapp>
          <DefaultButton>Cancel</DefaultButton>
          <DefaultButton className="submit-button">OK</DefaultButton>
        </S.ButtonsWrapp>
      </S.NewListInner>
    </S.NewListWrapp>
  );
};
