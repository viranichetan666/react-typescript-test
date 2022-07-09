import React, { FunctionComponent } from "react";
import styled from "styled-components";


const MainLayoutWrapper = styled.div`
 
`;

interface MainLayoutProps {
  
}

const MainLayout: FunctionComponent<MainLayoutProps> = () => {
  return (
      <MainLayoutWrapper>
          Layout Test
      </MainLayoutWrapper>
  )
};

MainLayout.propTypes = {
  
};

MainLayout.defaultProps = {
 
};

export default MainLayout;
