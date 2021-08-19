import styled from "styled-components";
import TableContainer from "@material-ui/core/TableContainer";

export const ItemsWrapper = styled.div`
  width: 500px;
  min-height: 80vh;
  margin: 40px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding-bottom: 50px;
  align-items: center;
`;

export const Header = styled.h1`
  font-weight: 400;
  margin: 0 0 50px;
`;

export const ContentWrapper = styled.div`
  text-align: center;
`;

export const TableContainerWrapper = styled(TableContainer)`
  width: 700px !important;
  min-height: 100px !important;
`;
