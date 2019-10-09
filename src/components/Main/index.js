import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Application from './Application';

const Container = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  position: relative;
  height: 100%;
`;

const PortalContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: ${props => props.theme.verticalSpace};
`;

const Main = () => (
  <Container>
    <PortalContainer>
      <Header />
      <Application />
    </PortalContainer>
  </Container>
);

export default Main;
