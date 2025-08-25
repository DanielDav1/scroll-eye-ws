"use client"

import * as S from "./styles"

interface TopicCardProps {
    title: string;
    image: string;
}

export const TopicCard = ({ title, image }: TopicCardProps)=> {
    return (
        <S.Card>
            <S.Image src={image} alt={title}/>
            <S.Gradient/>
            <S.TitleWrapper>
                <S.Title>{title}</S.Title>
            </S.TitleWrapper>
            <S.HoverOverlay/>
        </S.Card>
    )
}

