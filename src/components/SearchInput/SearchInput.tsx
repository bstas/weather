import Input from '@material-ui/core/Input';
import styled from "styled-components";

const SearchInputCustom = styled(Input)`
    margin-right: 50px;
`

const SearchInput = ({ placeholder, onChange, value }) => {
    return (
        <SearchInputCustom placeholder={placeholder} onChange={onChange} value={value} />
    )
}

export default SearchInput;
