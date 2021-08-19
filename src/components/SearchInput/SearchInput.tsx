import Input from "@material-ui/core/Input";
import styled from "styled-components";
import { ChangeEventHandler, FC } from "react";

const SearchInputCustom = styled(Input)`
  margin-right: 50px;
`;

interface Props {
  placeholder: string;
  onChange: ChangeEventHandler;
  value: string;
}

const SearchInput: FC<Props> = ({ placeholder, onChange, value }) => {
  return (
    <SearchInputCustom
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default SearchInput;
