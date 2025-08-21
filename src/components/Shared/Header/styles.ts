import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: var(--primary);
  color: var(--primary-foreground);
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.2);
  position: relative;
  z-index: 50;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.25rem 1rem; // py-5 px-4
  @media (min-width: 768px) {
    padding: 1.25rem 1.5rem; // md:px-6
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(3rem); // translate-x-12

  h1 {
    font-size: 1.875rem; // text-3xl
    font-weight: bold;
    color: var(--accent);
    letter-spacing: -0.015em;
    font-family: "Federant", sans-serif;
    font-style: italic;
  }
`;

export const Nav = styled.nav`
  display: none;
  flex: 1;
  justify-content: center;
  margin-left: 1.5rem;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem; // space-x-10
`;

export const NavItem = styled.a`
  color: var(--primary-foreground);
  font-weight: 500;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: var(--accent);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;
