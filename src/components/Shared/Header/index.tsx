import React from 'react';
import { Button } from '../../UI/button';
import { Menu } from 'lucide-react';
import * as S from './styles';

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Inner>
          {/* Logo - left */}
          <S.Logo>
            <h1>Scroll📜Eye</h1>
          </S.Logo>
          {/* Navigation - Desktop */}
          <S.Nav>
            <S.NavList>
              <S.NavItem href="#">Início</S.NavItem>
              <S.NavItem href="#">Jogos</S.NavItem>
              <S.NavItem href="#">Animes</S.NavItem>
              <S.NavItem href="#">Filmes e Séries</S.NavItem>
              <S.NavItem href="#">Tecnologia e Economia</S.NavItem>
              <S.NavItem href="#">Política e Notícias</S.NavItem>
              <S.NavItem href="#">Geral</S.NavItem>
            </S.NavList>
          </S.Nav>
          {/* Mobile Navigation */}
          <S.MobileNav>
            <Button
              variant="outline"
              size="icon"
              className="border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </S.MobileNav>

          {/* Actions - Right */}
          <S.Actions>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Login
            </Button>
          </S.Actions>
        </S.Inner>
      </S.Wrapper>
    </S.Container>
  );
};
