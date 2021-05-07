import React from 'react';
import styled from 'styled-components';

import EmailsView from './EmailsView';
import SideBar from './SideBar';
import SideIcons from './SideIcons';

const Main = () => {
    return (
        <Wrapper>
            <SideBar />
            <EmailsView />
            <SideIcons /> 
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 50px;
`
