import { Props } from "./models";
import { ButtonInner } from "./styles";

export const DefaultButton = ({ children, ...props }: Props) => {
  return (
    <ButtonInner className="default-button" {...props}>
      {children}
    </ButtonInner>
  );
};
