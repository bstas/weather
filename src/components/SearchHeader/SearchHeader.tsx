import SearchInput from "../SearchInput/SearchInput";
import SearchButton from "../Button/Button";
import { HeaderWrapper } from "../../assets/styles/styles";
import React, { ChangeEventHandler, FC, MouseEventHandler } from "react";

interface Props {
  onClick: MouseEventHandler;
  onChange: ChangeEventHandler;
  placeholder: string;
  value: string;
}

const SearchHeader: FC<Props> = ({ onClick, onChange, placeholder, value }) => {
  return (
    <HeaderWrapper>
      <SearchInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <SearchButton onClick={onClick}>Clear</SearchButton>
    </HeaderWrapper>
  );
};

export default SearchHeader;
