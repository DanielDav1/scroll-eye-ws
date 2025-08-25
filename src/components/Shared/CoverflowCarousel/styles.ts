import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: #111827;
  overflow: hidden;
  position: relative;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slide = styled.div<{
  $isVisible: boolean;
  transform: string;
  zIndex: number;
  opacity: number;
  scale: number;
}>`
  position: absolute;
  display: ${(props) => (props.$isVisible ? "block" : "none")};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  transform: ${(props) => `${props.transform} scale(${props.scale})`};
  z-index: ${(props) => props.zIndex};
  opacity: ${(props) => props.opacity};
  transform-style: preserve-3d;
`;

export const Card = styled.div`
  background: #1f2937;
  border-radius: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  width: 900px;
  height: 700px;
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.3), transparent);
`;

export const TextBox = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  right: 3rem;
  color: white;

  h3 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    opacity: 0.9;
  }
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;

  button {
    all: unset;     
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: all 0.3s;

    &.active {
      background: white;
      transform: scale(1);
    }
  }
`;

export const NavButtonLeft = styled.button`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 50%;
  z-index: 30;
  transition: 0.3s;

  &:hover {
    background: white;
    transform: translateY(-50%) scale(1.1);
  }
`;

export const NavButtonRight = styled(NavButtonLeft)`
  left: auto;
  right: 1.5rem;
`;

export const MobileCarousel = styled.div`
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
  position: absolute;
  inset: 0;
  overflow-x: auto;
  display: flex;
  height: 100%;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MobileCard = styled.div`
  flex: none;
  width: 100%;
  scroll-snap-align: center;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export const MobileOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
`;

export const MobileText = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  right: 1.5rem;
  color: white;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    opacity: 0.9;
  }
`;
