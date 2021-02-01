import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  Inner,
  Title,
  Header,
  Body,
  Item,
  Frame,
} from './accordionStyles';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  const { Provider } = ToggleContext;

  return (
    <Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </Provider>
  );
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header {...restProps} onClick={() => setToggleShow(!toggleShow)}>
      {children}
      {toggleShow ? (
        <img src='./images/icons/close.png' alt='Close' />
      ) : (
        <img src='./images/icons/add.png' alt='Open' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
