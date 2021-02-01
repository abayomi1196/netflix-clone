import React from 'react';

import { Footer } from '../components';

export function FooterContainer() {
  const { Title, Break, Row, Column, Link, Text } = Footer;

  return (
    <Footer>
      <Title>Questions? Contact us.</Title>
      <Break />

      <Row>
        <Column>
          <Link href='#'>FAQs</Link>
          <Link href='#'>Investor Relations</Link>
          <Link href='#'>Ways to Watch</Link>
          <Link href='#'>Corporate Information</Link>
          <Link href='#'>Netflix Originals</Link>
        </Column>

        <Column>
          <Link href='#'>Help Center</Link>
          <Link href='#'>Jobs</Link>
          <Link href='#'>Terms of Use</Link>
          <Link href='#'>Contact Us</Link>
        </Column>

        <Column>
          <Link href='#'>Account</Link>
          <Link href='#'>Redeem gift cards</Link>
          <Link href='#'>Privacy</Link>
          <Link href='#'>Speed Test</Link>
        </Column>

        <Column>
          <Link href='#'>Media Center</Link>
          <Link href='#'>Buy gift cards</Link>
          <Link href='#'>Cookie Preferences</Link>
          <Link href='#'>Legal Notices</Link>
        </Column>
      </Row>

      <Break />
      <Text>Netflix Canada</Text>
    </Footer>
  );
}
