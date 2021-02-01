import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  max-width: 815px;
  margin: 0 auto;
  padding: 9.5em 2.8125em;
`;
export const Title = styled.h1`
  color: #fff;
  max-width: 640px;
  font-size: 3.125rem;
  font-weight: 700;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;
export const SubTitle = styled.h2`
  color: #fff;
  font-size: 1.625rem;
  font-weight: normal;
  margin: 1em auto;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
`;
