import { Props } from "./models";
import { ButtonInner } from "./styles";

export const DefaultButton = ({ children, disabled, selected, ...props }: Props) => {
  return (
    <ButtonInner disabled={disabled} selected={selected} className="default-button" {...props}>
      {children}
    </ButtonInner>
  );
};
