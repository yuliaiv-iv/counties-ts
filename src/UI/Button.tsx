import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  padding?: string;
};

const Btn = styled.button<Props>`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: var(--color-ui);
  color: var(--color-text);
  font-size: var(--fs-sm);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  font-weight: var(--fw-light);
  line-height: 20px;
  padding: ${(props) => props.padding || "6px 24px"};

  &:hover {
    box-shadow: var(--hover-shadow);
  }
  svg {
    margin-right: 10px;
  }

  @media (min-width: 767px) {
  }
`;

type ButtonProp = {
  onClick: () => void;
  text?: string;
  className?: string;
  children?: ReactNode;
  padding?: string
};

function Button({ text, children, onClick, className, padding }: ButtonProp) {
  return (
    <Btn onClick={onClick} className={className} padding={padding}>
      {children} {text}
    </Btn>
  );
}

export default Button;
