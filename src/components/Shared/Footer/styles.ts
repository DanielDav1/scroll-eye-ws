import styled from "styled-components";

export const Container = styled.footer`
  background: var(--primary);
  color: var(--primary-foreground);
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SubTitle = styled.h3`
  color: var(--accent);
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--accent);
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;

    &:hover {
      color: var(--accent);
    }
  }
`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: var(--accent);
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: 0.9;
  font-size: 0.875rem;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media(min-width: 768px) {
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--accent);
    }
  }
`;
