import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 4.375em 3.5em;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 4.375em 1.875em;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 0.9375em;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 1.25em;
  font-size: 0.8125rem;
  text-decoration: none;
  transition: all 0.15s ease-in;

  &:hover {
    color: #fff;
  }
`;

export const Title = styled.p`
  color: #757575;
  margin-bottom: 2.5em;
`;

export const Text = styled.p`
  font-size: 0.8125rem;
  color: #757575;
  margin-bottom: 2.5em;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
