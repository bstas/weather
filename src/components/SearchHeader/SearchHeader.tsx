import SearchInput from "../SearchInput/SearchInput";
import SearchButton from "../Button/Button";
import {HeaderWrapper} from "../../assets/styles/styles";

const SearchHeader = ({ onClick, onChange, placeholder, value }) => {
    return (
        <HeaderWrapper>
            <SearchInput placeholder={placeholder} onChange={onChange} value={value} />
            <SearchButton onClick={onClick}>Clear</SearchButton>
        </HeaderWrapper>
    )
}

export default SearchHeader;
