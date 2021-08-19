import Button from "@material-ui/core/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background: aquamarine !important;
  width: 100px;
  height: 35px;
`;

const SearchButton = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default SearchButton;
