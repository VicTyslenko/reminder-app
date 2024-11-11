import * as S from "../styles";
import { useState } from "react";
import { DefaultInput } from "shared/components/input/default-input";
import { nanoid } from "nanoid";
import { DefaultTypography } from "shared/components/default-typography";
import { DefaultButton } from "shared/components/button";
import { useStoreDispatch } from "shared/hooks/global/use-store-dispatch";
import { addListItem } from "store/lists";
import { closeModalWindow } from "store/modals";

export const NewListModal = () => {
  const [value, setValue] = useState("");
  const dispatch = useStoreDispatch();

  const handleAddItem = () => {
    const newItem = {
      title: value,
      id: nanoid(),
    };

    dispatch(addListItem(newItem));
    setValue("");
    dispatch(closeModalWindow());
  };

  return (
    <S.NewListWrapp>
      <DefaultTypography as="h1">New list</DefaultTypography>
      <S.NewListInner>
        <DefaultInput labelText="Name" onChange={(e) => setValue(e.target.value)} value={value} />

        <S.ButtonsWrapp disabled={!value}>
          <DefaultButton>Cancel</DefaultButton>
          <DefaultButton className="submit-button" onClick={handleAddItem} disabled = {!value}>
            OK
          </DefaultButton>
        </S.ButtonsWrapp>
      </S.NewListInner>
    </S.NewListWrapp>
  );
};
