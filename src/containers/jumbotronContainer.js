import React from 'react';

import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  const { Container, Title, SubTitle, Image, Pane } = Jumbotron;

  return (
    <Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Pane>
            <Title>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
          </Pane>
          <Pane>
            <Image src={item.image} alt={item.alt} />
          </Pane>
        </Jumbotron>
      ))}
    </Container>
  );
}
