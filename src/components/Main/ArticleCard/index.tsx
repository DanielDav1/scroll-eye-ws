import React from "react";
import { Clock, User } from "lucide-react";
import * as S from "./styles";
import { ImageWithFallback } from "../../Figma/ImageWithFallback";

interface ArticleCardProps {
    title: string;
    summary: string;
    image: string;
    category: string;
    author: string;
    readTime: string;
    publishedAt: string;
}

export const ArticleCard: React.FC<ArticleCardProps>= ({
    title,
    summary,
    image, 
    category,
    author,
    readTime,
    publishedAt
}) => {
    return (
        <S.CardContainer>
            <S.Header>
                <ImageWithFallback src={image} alt={title} className={S.ArticleImage}/>
                <S.GradientOverlay/>
                <S.CategoryBadge>{category}</S.CategoryBadge>
            </S.Header>

            <S.Content>
                <h3>{title}</h3>
                <p>{summary}</p>
            </S.Content>
            <S.Footer>
                <S.FooterLeft>
                    <User />
                    <span>{author}</span>
                </S.FooterLeft>
                <S.FooterRight>
                    <div>
                        <Clock />
                        <span>{readTime}</span>
                    </div>
                    <div>
                        <span>{publishedAt}</span>
                    </div>
                </S.FooterRight>
            </S.Footer>
        </S.CardContainer>
    )
}