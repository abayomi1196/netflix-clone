import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
  margin-bottom: 0.625em;
`;

export const Inner = styled.div`
  display: flex;
  padding: 4.375em 2.8125em;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: #fff;
  margin-bottom: 0.625em;
  max-width: 1000px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0.5em;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.1875rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 0.0625em;
  font-size: 1.625rem;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  user-select: none;
  align-items: center;
  box-sizing: border-box;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Body = styled.div`
  font-size: 1.625rem;
  line-height: normal;
  font-weight: normal;
  background: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;
  transition: max-height 0.25s ease-in;
  box-sizing: border-box;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
`;
