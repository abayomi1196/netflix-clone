import React from 'react';

import { Accordion, OptForm } from '../components';
import * as ROUTES from '../constants/routes';
import faqsData from '../fixtures/faqs.json';

export function AccordionContainer() {
  const { Title, Item, Header, Body, Frame } = Accordion;
  const { Input, Button, Text } = OptForm;
  return (
    <Accordion>
      <Title>Frequently Asked Questions</Title>
      <Frame>
        {faqsData.map((item) => (
          <Item key={item.id}>
            <Header>{item.header}</Header>
            <Body>{item.body}</Body>
          </Item>
        ))}
      </Frame>

      <OptForm>
        <Input placeholder='Email address...' type='email' />
        <Button to={ROUTES.SIGN_UP}>Try it Now</Button>
        <Text>
          Ready to watch? Enter your email to create or restart your membership
        </Text>
      </OptForm>
    </Accordion>
  );
}
