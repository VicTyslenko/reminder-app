import * as S from "./styles";
import { Sidebar } from "./sidebar/sidebar";
import { Content } from "./content/content";
export const MainComponent = () => {
  return (
    <S.MainWrapp>
      <S.MainInner>
        <Sidebar />
        <Content />
      </S.MainInner>
    </S.MainWrapp>
  );
};
