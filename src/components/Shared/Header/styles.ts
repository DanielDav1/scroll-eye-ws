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
  padding: 6px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.9rem;
    font-weight: bold;
    color: var(--accent);
    font-family: "Federant", sans-serif;
    font-style: italic;
  }
`;

export const Nav = styled.nav`
  display: none;
  flex: 1;
  justify-content: flex-start;
  margin-left: 84px;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
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

export const AvatarButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  color: var(--primary-foreground);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5rem;
`;
