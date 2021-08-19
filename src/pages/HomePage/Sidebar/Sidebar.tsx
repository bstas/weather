import React, { FC } from "react";
import styled from "styled-components";
import { asideItems } from "../../../assets/data/asideItems";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import { Link } from "react-router-dom";
import logout from "../../../assets/icons/logout.svg";

const SidebarWrapper = styled.div`
  width: 20%;
  min-height: 95vh;
  background: linear-gradient(#5f00d8, #c680cd, #f3d7ff);
`;

const ListItem = styled.li`
  color: white;
  list-style-type: none;
  height: 50px;
  cursor: pointer;
  align-items: center;
`;

const LabelWrap = styled.div`
  padding: 30px;
  color: #fff;
`;

const ItemLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding-left: 10px;
  font-size: ${(props: { logo: string }) => (props.logo ? "18px" : "16px")};
`;

const SidebarLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding-left: 10px;
  :hover {
    color: lightblue;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: space-between;
`;

const LogoutWrapper = styled.div`
  padding-left: 40px;

  a:hover {
    color: red;
  }
`;

const Sidebar: FC = () => {
  const logoutUser = (): void => {
    localStorage.setItem("token", "");
  };

  return (
    <>
      <SidebarWrapper>
        <LabelWrap>
          <WbSunnyOutlinedIcon fontSize="large" />
          <ItemLink logo="true" to="/">
            Weather App
          </ItemLink>
        </LabelWrap>
        <ItemsWrapper>
          <ul>
            {asideItems.map((item) => {
              const { icon, name } = item;
              return (
                <ListItem key={name}>
                  <img src={icon} alt={name} />
                  <SidebarLinks to={`/${name.toLowerCase()}`}>
                    {name}
                  </SidebarLinks>
                </ListItem>
              );
            })}
          </ul>
          <LogoutWrapper>
            <img src={logout} alt="Logout" />
            <SidebarLinks to="/login" onClick={logoutUser}>
              Logout
            </SidebarLinks>
          </LogoutWrapper>
        </ItemsWrapper>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
