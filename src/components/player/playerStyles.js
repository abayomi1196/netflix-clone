import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 1.25em;
`;

export const Inner = styled.div`
  position: relative;
  width: 95%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.45);
  border: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.3);
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #000;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  font-size: 1.125rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding-left: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }

  &:focus {
    outline: none;
  }
`;
