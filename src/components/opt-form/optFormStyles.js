import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 1.25em;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 0.45em 0.625em;
  height: 70px;
  box-sizing: border-box;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  font-family: inherit;
  font-size: 1rem;

  @media (max-width: 1000px) {
    border-radius: 7px;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e50914;
  color: #fff;
  text-transform: uppercase;
  padding: 0 2em;
  font-size: 1rem;
  border: 0;
  font-family: inherit;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 0.2s ease;

  img {
    margin-left: 0.625em;
    filter: brightness(0) invert(1);
    width: 20px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background: #f40612;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 1rem;
    margin-top: 1.25em;
    border-radius: 5px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 1.1875rem;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`;
