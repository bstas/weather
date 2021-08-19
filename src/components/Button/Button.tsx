import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { FC, MouseEventHandler, ReactNode } from "react";

const StyledButton = styled(Button)`
  background: aquamarine !important;
  width: 100px;
  height: 35px;
`;

interface Props {
  onClick: MouseEventHandler;
  children: string | ReactNode;
}

const SearchButton: FC<Props> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default SearchButton;
