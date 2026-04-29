import React from 'react';
import * as S from './styles';
import { User } from "lucide-react";

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
          {/* Actions - Right */}
          <S.Actions>
            <S.AvatarButton>
              <User />
            </S.AvatarButton>
          </S.Actions>
        </S.Inner>
      </S.Wrapper>
    </S.Container>
  );
};
