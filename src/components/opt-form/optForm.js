import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Input, Button, Text } from './optFormStyles';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ to, children, ...restProps }) {
  return (
    <Button {...restProps}>
      <Link to={to}>
        {children} <img src='./images/icons/chevron-right.png' alt='Try Now' />
      </Link>
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

// Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
//   return <ButtonLink {...restProps}>{children}</ButtonLink>;
// };
// Header.Logo = function HeaderLogo({ ...restProps }) {
//   return (
//     <ReactRouterLink to={ROUTES.HOME}>
//       <Logo {...restProps} />
//     </ReactRouterLink>
//   );
// };
