import React from "react";
import * as S from "./styles"
import { Separator } from "../../UI/separator"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export const Footer: React.FC = () => {
    return(
        <S.Container>
            <S.Content>
                <S.Grid>
                    {/* Logo e Descrição */}
                    <S.Section>
                        <S.Title>
                            Scroll<span style={{color: "var(--accent)"}}>Eye</span>
                        </S.Title>
                        <S.Text>
                            Sua fonte confiável de notícias e informações atuaizadas.
                            Cobrimos os principais acontecimentos do Brasil e do Mundo.
                        </S.Text>
                        <S.SocialIcons>
                            <Facebook/>
                            <Twitter/>
                            <Instagram/>
                            <Linkedin/>
                        </S.SocialIcons>
                    </S.Section>

                    {/* Links Rápidos */}
                    <S.Section>
                        <S.SubTitle>Links Rápidos</S.SubTitle>
                        <S.List>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Jogos</a></li>
                            <li><a href="#">Animes</a></li>
                            <li><a href="#">Filmes e Séries</a></li>
                            <li><a href="#">Tecnologia e Economia</a></li>
                            <li><a href="#">Política e Notícias</a></li>
                            <li><a href="#">Geral</a></li>
                        </S.List>
                    </S.Section>
                    {/* Categorias */}
                    <S.Section>
                        <S.SubTitle>Categorias</S.SubTitle>
                        <S.List>
                            <li><a href="#">Economia</a></li>
                            <li><a href="#">Cultura</a></li>
                            <li><a href="#">Saúde</a></li>
                            <li><a href="#">Educação</a></li>
                            <li><a href="#">Meio Ambiente</a></li>
                        </S.List>
                    </S.Section>
                    {/* Contato */}
                    <S.Section>
                        <S.SubTitle>Contato</S.SubTitle>
                        <S.ContactList>
                            <S.ContactItem><Mail /><span>contato@scrolleye.com</span> </S.ContactItem>
                            <S.ContactItem><Phone /><span>(11) 9999-9999</span> </S.ContactItem>
                            <S.ContactItem><MapPin /><span>São Paulo, SP</span> </S.ContactItem>
                        </S.ContactList>
                    </S.Section>
                </S.Grid>

                <Separator className="my-8 bg-primary-foreground/20"/>
                <S.FooterBottom>
                    <p>&copy; 2025 ScrollEye. Todos os Direitos Reservados.</p>
                    <S.FooterLinks>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Termos de Uso</a>
                        <a href="#">Cookies</a>
                    </S.FooterLinks>
                </S.FooterBottom>
            </S.Content>
        </S.Container>

    )
}