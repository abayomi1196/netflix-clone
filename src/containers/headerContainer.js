import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
  const { Frame, Logo, ButtonLink } = Header;
  return (
    <Header>
      <Frame>
        <Logo src='./images/misc/logo.svg' />
        <ButtonLink to={ROUTES.SIGN_IN}>Sign In</ButtonLink>
      </Frame>
      {children}
    </Header>
  );
}
