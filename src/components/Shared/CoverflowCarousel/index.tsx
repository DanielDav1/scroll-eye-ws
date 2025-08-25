import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../../Figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as S from './styles';

const featuredArticles = [
  {
    id: 1,
    title: 'Tecnologia Revoluciona o Futuro',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    summary: 'Descubra as últimas inovações que estão mudando o mundo',
  },
  {
    id: 2,
    title: 'Esportes em Destaque',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    summary: 'Os melhores momentos do esporte nacional e internacional',
  },
  {
    id: 3,
    title: 'Economia Global',
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    summary: 'Análise completa dos mercados financeiros',
  },
  {
    id: 4,
    title: 'Cultura e Arte',
    image:
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
    summary: 'Explore o mundo da arte e cultura contemporânea',
  },
  {
    id: 5,
    title: 'Saúde e Bem-estar',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    summary: 'Dicas e novidades para uma vida mais saudável',
  },
];

export const CoverflowCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Section>
      <S.CarouselContainer>
        {featuredArticles.map((article, index) => {
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % featuredArticles.length;
          const isPrev =
            index ===
            (currentIndex - 1 + featuredArticles.length) %
              featuredArticles.length;
          const isVisible = isActive || isNext || isPrev;

          let transform = '';
          let zIndex = 1;
          let opacity = 0.3;
          let scale = 0.6;
          if (isActive) {
            transform = 'translateX(0px)';
            zIndex = 10;
            opacity = 1;
            scale = 1;
          } else if (isNext) {
            transform = 'translateX(480px) rotateY(-25deg)';
            zIndex = 5;
            opacity = 0.5;
            scale = 0.65;
          } else if (isPrev) {
            transform = 'translateX(-480px) rotateY(25deg)';
            zIndex = 5;
            opacity = 0.5;
            scale = 0.65;
          }

          return (
            <S.Slide
              key={article.id}
              $isVisible={isVisible}
              transform={transform}
              zIndex={zIndex}
              opacity={opacity}
              scale={scale}
              onClick={() => goToSlide(index)}
            >
              <S.Card>
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <S.Overlay />
                <S.TextBox>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                </S.TextBox>
              </S.Card>
            </S.Slide>
          );
        })}

        <S.Dots>
          {featuredArticles.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => goToSlide(index)}
            />
          ))}
        </S.Dots>
        <S.NavButtonLeft onClick={prevSlide}>
          <ChevronLeft className="h-8 w-8 text-gray-800" />
        </S.NavButtonLeft>
        <S.NavButtonRight onClick={nextSlide}>
          <ChevronRight className="h-8 w-8 text-gray-800" />
        </S.NavButtonRight>
      </S.CarouselContainer>
      <S.MobileCarousel>
        {featuredArticles.map((article) => (
          <S.MobileCard key={article.id}>
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <S.MobileOverlay />
            <S.MobileText>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </S.MobileText>
          </S.MobileCard>
        ))}
      </S.MobileCarousel>
    </S.Section>
  );
};
