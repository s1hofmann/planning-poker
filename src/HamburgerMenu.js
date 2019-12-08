import React from "react";
import styled from "styled-components";

const BAR_WIDTH = 40;
const BAR_HEIGHT = 4;
const BAR_SPACING = 8;

const MenuWrapperHeight = BAR_HEIGHT + BAR_SPACING * 2;
const MenuWrapperPaddingTop = BAR_HEIGHT + BAR_SPACING * 2;

const MenuWrapper = styled.div`
    width: ${BAR_WIDTH}px;
    height: ${MenuWrapperHeight}px;
	padding-top: ${MenuWrapperPaddingTop}px;
	cursor: pointer;
`;

const Menu = styled.div`
	position: relative;
	background: rgba(255, 255, 255, ${props => props.open ? `0` : `1`});
    width: ${BAR_WIDTH}px;
	height: ${BAR_HEIGHT}px;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: ${props => props.open ? `0px` : `${BAR_SPACING}px`};
        width: ${BAR_WIDTH}px;
        height: ${BAR_HEIGHT}px;
        background: rgba(255, 255, 255, 1);
        transform: ${props => props.open ? `rotate(-45deg)` : `rotate(0deg)`};
        transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: ${props => props.open ? `0px` : `${BAR_SPACING}px`};
        width: ${BAR_WIDTH}px;
        height: ${BAR_HEIGHT}px;
        background: rgba(255, 255, 255, 1);
        transform: ${props => props.open ? `rotate(45deg)` : `rotate(0deg)`};
        transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
    }
`;

export const HamburgerMenu = (props) => {
    return (
        <MenuWrapper onClick={props.onClick}>
            <Menu open={props.open}></Menu>
        </MenuWrapper>
    );
}
