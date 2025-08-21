import styled from "styled-components";

export const CardContainer = styled.div`
  overflow: hidden;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.12);
    transform: scale(1.02);
  }
`;

export const Header = styled.div`
  position: relative;
  height: 13rem;
  overflow: hidden;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
  opacity: 0;
  transition: opacity 0.3s;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

export const CategoryBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  background: var(--accent);
  color: var(--accent-foreground);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  transition: background 0.2s;

  ${CardContainer}:hover & {
    background: rgba(255, 0, 0, 0.8); /* ou outra cor de hover */
  }
`;

export const Content = styled.div`
  padding: 1.25rem;

  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.3s;

    ${CardContainer}:hover & {
      color: var(--primary);
    }
  }

  p {
    font-size: 0.875rem;
    color: var(--muted-foreground);
    line-height: 1.4;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Footer = styled.div`
  padding: 0 1.25rem 1.25rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--muted-foreground);
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    color: var(--primary);
  }

  span {
    font-weight: 500;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
      width: 0.75rem;
      height: 0.75rem;
      color: var(--primary);
    }
  }

  span {
    color: rgba(0,0,0,0.6); /* ou var(--primary/60) */
  }
`;
