import styled from 'styled-components';

// Title,
export const Title = styled.p`
  font-size: 1.5rem;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 3.5em;
  margin-right: 3.5em;
  margin-top: 0;
`;

// Container,
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 3.125em;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 1.875em;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

// Group,
export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === 'row' ? 'row' : 'column'};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -6.375em;
    }
  }
`;

// SubTitle,
export const SubTitle = styled.p`
  font-size: 0.75rem;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

// Text,
export const Text = styled.p`
  margin-top: 0.3125em;
  font-size: 0.625rem;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

// Entities,
export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

// Meta,
export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 0.625em;
  background-color: #0000008f;
`;

// Image,
export const Image = styled.img`
  border: 0;
  width: 100%;
  border-radius: 3px;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;

// Item,
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.3125em;
  position: relative;
  cursor: pointer;
  transition: transform 0.25s ease-in;

  &:hover {
    transform: scale(1.25);
    z-index: 99;
  }

  @media (min-width: 1000px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 3.5em;

    @media (max-width: 1000px) {
      margin-left: 1.875em;
    }
  }

  &:last-of-type {
    margin-right: 3.5em;

    @media (max-width: 1000px) {
      margin-right: 1.875em;
    }
  }
`;

// FeatureText,
export const FeatureText = styled.p`
  font-size: 1.125em;
  color: #fff;
  font-weight: ${({ fontWeight }) =>
    fontWeight === 'bold' ? 'bold' : 'normal'};
  margin: 0;
  @media (max-width: 800px) {
    line-height: 22px;
  }
`;

// Feature,
export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: #000;

  @media (max-width: 1000px) {
    height: auto;
    background-size: contain;

    ${Title} {
      font-size: 1.25rem;
      line-height: 20px;
      margin-bottom: 0.625em;
    }

    ${FeatureText} {
      font-size: 0.875rem;
    }
  }
`;

// FeatureTitle,
export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

// FeatureClose,
export const FeatureClose = styled.button`
  color: #fff;
  border: none;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  transition: transform 0.25s ease;
  background-color: transparent;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.3);
  }
`;

// Content,
export const Content = styled.div`
  margin: 3.5em;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 1.875em;
    max-width: none;
  }
`;

// Maturity,
export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  width: 20px;
  padding: 0.3125em;
  margin-right: 0.85em;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 0.75rem;
`;
