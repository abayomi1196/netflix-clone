import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 3.75em 4.25em 2.5em;
  margin-top: 2.5em;
  margin-bottom: 6.25em;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Error = styled.div`
  background-color: #e87c03;
  border-radius: 4px;
  font-size: 0.875rem;
  margin: 0 0 1em;
  color: #fff;
  padding: 0.9375em 1.25em;
`;

export const Input = styled.input`
  background-color: #333;
  border: 0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.8rem;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 0.3125em 1.25em;
  margin-bottom: 1.25em;

  &:focus {
    outline: 0;
  }

  &:last-of-type {
    margin-bottom: 2.25em;
  }
`;

export const Submit = styled.button`
  background-color: #e50914;
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;
  font-family: inherit;
  margin: 1.5em 0 0.75em;
  height: 57px;
  border: 0;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:focus {
    outline: 0;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: #e50224;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.75em;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 0.625em;
  font-size: 0.75rem;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;
  margin-left: 0.5em;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
