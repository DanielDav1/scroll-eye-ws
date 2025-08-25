import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
`;

export const SectionWhite = styled.section`
  padding: 4rem 1rem;
  background: #ffffff;
`;

export const SectionDark = styled.section`
  padding: 5rem 1rem;
  background: #111827;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #1f2937;

    span {
      color: #f59e0b; // accent color
    }
  }

  p {
    color: #6b7280; // muted foreground
    max-width: 50rem;
    margin: 0 auto;
    font-size: 1.125rem;
  }
`;

export const Grid3 = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Grid2 = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export const ShowMoreButton = styled.button`
  background: #f59e0b;
  color: #ffffff;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);

  &:hover {
    background: #d97706;
    transform: scale(1.05);
  }
`;
