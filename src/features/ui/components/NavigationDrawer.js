import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";

import ThemeForm from "../../settings/components/ThemeForm";
import { CLOSE_NAVIGATION_DRAWER } from "../actions/uiActionTypes";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
`;

const StyledNavigationDrawer = styled.div`
  padding: 16px 0;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 0 10px;
  margin-bottom: 16px;
  letter-spacing: 0.1em;
  :not(:first-child) {
    margin-top: 16px;
  }
  color: ${(props) => props.theme.primary}7F;
`;

const StyledLink = styled(Link)`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  text-transform: capitalize;
  color: ${(props) => props.theme.primary};
  &:hover {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  text-transform: capitalize;
  color: ${(props) => props.theme.primary};
  &:hover {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
`;

function NavigationDrawer() {
  const ref = React.useRef(null);
  const dispatch = useDispatch();
  const navigationDrawer = useSelector((state) => state.ui.navigationDrawer);

  useClickAway(ref, () => dispatch({ type: CLOSE_NAVIGATION_DRAWER }));

  if (navigationDrawer) {
    return (
      <Wrapper>
        <StyledNavigationDrawer ref={ref}>
          <Title>General</Title>
          <StyledLink to="/portfolios">Manage portfolios</StyledLink>
          <ThemeForm />
          <StyledLink to="/settings">Settings</StyledLink>
          <StyledLink to="/notifications">Notifications</StyledLink>
          <Button>Contact support</Button>
          <Title>Sharing</Title>
          <Button>Share screenshot</Button>
        </StyledNavigationDrawer>
      </Wrapper>
    );
  }
  return null;
}

export default NavigationDrawer;
