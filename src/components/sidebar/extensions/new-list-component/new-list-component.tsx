import * as S from "../styles";
import { DefaultInput } from "shared/components/input/default-input";
import { DefaultTypography } from "shared/components/default-typography";


export const NewListComponent = () => {

  
  return (
    <S.NewListWrapp>
      <S.NewListInner>
        <DefaultTypography as="h1">New list</DefaultTypography>
        <DefaultInput labelText="Name" />
      </S.NewListInner>
    </S.NewListWrapp>
  );
};
