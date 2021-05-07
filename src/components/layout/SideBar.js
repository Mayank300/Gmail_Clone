import React from 'react'
import styled from 'styled-components';
import Compose from '../buttons/Compose';

import { sideBarButtonItems } from '../../data/SideBarButtonItems'

const SideBar = () => {
    return (
        
        <Wrapper>
            <ComposeWrapper>
                <Compose />
            </ComposeWrapper>

            <SideButtonsWrapper>
                {
                    sideBarButtonItems.map(item =>(
                        <SideBarButtonItem>
                            {item.icon}
                            {item.text}
                        </SideBarButtonItem>
                    ))
                }
            </SideButtonsWrapper>

            <MeetWrapper>

            </MeetWrapper>

            <HangoutsWrapper>
                
            </HangoutsWrapper>

            <BottomIconsWrapper>

            </BottomIconsWrapper>

        </Wrapper>
    )
}

export default SideBar;

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: 100vh;
`

const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`

const SideButtonsWrapper = styled.div``

const SideBarButtonItem = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color: #5f6368;
    padding: 5px 25px;
    border-radius: 0 100px 0 100px;
    cursor: pointer;
    margin-right: 8px;

    :hover {
        background-color: lightgray;
    }
`

const MeetWrapper = styled.div``

const HangoutsWrapper = styled.div``

const BottomIconsWrapper = styled.div``
