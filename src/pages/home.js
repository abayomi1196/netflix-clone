import React from 'react';
import * as ROUTES from '../constants/routes';

import { OptForm, Feature } from '../components';

import { JumbotronContainer } from '../containers/jumbotronContainer';
import { FooterContainer } from '../containers/footerContainer';
import { AccordionContainer } from '../containers/accordionContainer';
import { HeaderContainer } from '../containers/headerContainer';

export default function Home() {
  const { Title, SubTitle } = Feature;
  const { Input, Button, Text } = OptForm;

  return (
    <>
      <HeaderContainer>
        <Feature>
          <Title>Unlimited Films, TV Programs & more.</Title>
          <SubTitle>Watch anywhere. Cancel at any time</SubTitle>
          <OptForm>
            <Input placeholder='Email Address' />
            <Button to={ROUTES.SIGN_UP}>Try it now</Button>
            <Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}
