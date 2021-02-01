import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background: url(${({ src }) =>
      src ? `./images/misc/${src}.jpg` : `./images/misc/home-bg.jpg`})
    top left / cover no-repeat;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 3.5em;
  height: 75px;
  padding: 1.125em 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 1.875em;
  } ;
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 1.875em;
  font-weight: ${({ active }) => (active === 'true' ? '900' : 'normal')};
  font-size: ${({ active }) => (active === 'true' ? '1.2rem' : '1rem')};
  cursor: pointer;
  user-select: none;

  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 0.9375rem;
  border-radius: 3px;
  padding: 0.5em 1.0625em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 2.5em;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1.35rem;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Feature = styled(Container)`
  padding: 18em 0 32em 0;
  flex-direction: column;
  box-sizing: border-box;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }

  & * {
    box-sizing: inherit;
  }
`;

export const FeatureCallout = styled.h2`
  color: #fff;
  font-size: 3.125rem;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 0.625em 1.5em;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 1.35rem;
  margin-top: 0.625em;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: #fff;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }

  &:focus {
    outline: none;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid #fff;
  font-family: inherit;
  transition: width 0.5s ease-in-out;
  height: 30px;
  font-size: 0.875rem;
  margin-left: ${({ active }) => (active === true ? '0.625em' : '0')};
  padding: ${({ active }) => (active === true ? '0 0.625em' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0')};

  &:placeholder {
    color: white;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #000;
  padding: 0.625em 0.8em;
  width: 100px;
  top: 32px;
  right: 0;
  z-index: 1000;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 0.625em;
  }

  p {
    font-size: 0.75rem;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.25em;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: block;
    flex-direction: column;
  }
`;
