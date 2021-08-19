import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";
import { FC } from "react";
import { Redirect } from "react-router-dom";

const HomePageWrapper = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid lightblue;
`;

const HomePage: FC = () => {
  const { token }: Storage = localStorage;

  return (
    <>
      {token ? (
        <HomePageWrapper>
          <Sidebar />
          <MainContent />
        </HomePageWrapper>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default HomePage;
