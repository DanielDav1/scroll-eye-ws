import styled from "styled-components";
import { ImageWithFallback } from "../../Figma/ImageWithFallback"

export const Card = styled.div`
  position: relative;
  height: 18rem; 
  overflow: hidden;
  border-radius: 0.5rem; 
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  }
`;

export const Image = styled(ImageWithFallback)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.3),
    transparent
  );
  transition: all 0.3s;

  ${Card}:hover & {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.3),
      transparent
    );
  }
`;

export const TitleWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
`;

export const Title = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.25;
  transition: transform 0.3s, text-shadow 0.3s;

  ${Card}:hover & {
    transform: scale(1.05);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }
`;

export const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(100, 100, 255, 0.1); 
  opacity: 0;
  transition: opacity 0.3s;

  ${Card}:hover & {
    opacity: 1;
  }
`;
