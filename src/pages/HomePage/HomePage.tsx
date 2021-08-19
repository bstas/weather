import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "../HomePage/MainContent/MainContent";

const HomePageWrapper = styled.div`
  display: flex;
  width: 100%;
`
const HomePage = () => {
    return (
        <HomePageWrapper>
            <Sidebar />
            <MainContent/>
        </HomePageWrapper>
    )
}

export default HomePage;
