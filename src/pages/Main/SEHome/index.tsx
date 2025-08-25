import { Header } from "../../../components/Shared";
import { CoverflowCarousel } from "../../../components/Shared/CoverflowCarousel";
import { ArticleCard } from "../../../components/Main/ArticleCard";
import { TopicCard } from "../../../components/Main/TopicCard";
import { Footer } from "../../../components/Shared";
import * as S from "./styles";

const latestArticles = [
  {
    id: 1,
    title: "Inteligência Artificial Transforma o Setor de Saúde",
    summary:
      "Novas tecnologias de IA estão revolucionando diagnósticos médicos e tratamentos personalizados, oferecendo esperança para milhões de pacientes ao redor do mundo.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    category: "Tecnologia",
    author: "Dr. Maria Silva",
    readTime: "5 min",
    publishedAt: "2 horas atrás",
  },
  {
    id: 2,
    title: "Copa do Mundo de Futebol: Brasil se Prepara",
    summary:
      "A seleção brasileira intensifica os treinamentos para a próxima Copa do Mundo. Técnico anuncia convocação com surpresas e jovens talentos.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    category: "Esportes",
    author: "João Santos",
    readTime: "3 min",
    publishedAt: "4 horas atrás",
  },
  {
    id: 3,
    title: "Mercado Financeiro Registra Alta Histórica",
    summary:
      "Bolsa de valores brasileira atinge novo recorde histórico impulsionada por investimentos estrangeiros e otimismo do mercado interno.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    category: "Economia",
    author: "Ana Costa",
    readTime: "4 min",
    publishedAt: "6 horas atrás",
  },
  {
    id: 4,
    title: "Festival de Arte Contemporânea Movimenta São Paulo",
    summary:
      "Maior evento de arte contemporânea da América Latina reúne artistas de 30 países em exposições inovadoras pela capital paulista.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    category: "Cultura",
    author: "Pedro Lima",
    readTime: "6 min",
    publishedAt: "8 horas atrás",
  },
  {
    id: 5,
    title: "Energia Renovável Atinge Marco no Brasil",
    summary:
      "País alcança 90% de energia limpa na matriz energética, liderando ranking mundial de sustentabilidade e inovação ambiental.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop",
    category: "Meio Ambiente",
    author: "Carla Oliveira",
    readTime: "5 min",
    publishedAt: "10 horas atrás",
  },
  {
    id: 6,
    title: "Revolução na Educação Digital",
    summary:
      "Novas plataformas educacionais incorporam realidade virtual e inteligência artificial para criar experiências de aprendizado imersivas.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    category: "Educação",
    author: "Lucas Ferreira",
    readTime: "7 min",
    publishedAt: "12 horas atrás",
  },
];

const topics = [
  {
    id: 1,
    title: "Jogos",
    image: "https://images.unsplash.com/photo-1694857692314-7147cec858db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
  },
  {
    id: 2,
    title: "Animes",
    image:
      "https://images.unsplash.com/photo-1563393471486-370b35d7de64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNoYXJhY3RlciUyMGNvbG9yZnVsfGVufDF8fHx8MTc1NTUzOTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Filmes e Séries",
    image:
      "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNpbmVtYSUyMHBvcGNvcm58ZW58MXx8fHwxNzU1NTAyOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Tecnologia e Economia",
    image:
      "https://images.unsplash.com/photo-1544739313-3b4137a6541b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcHV0ZXIlMjBidXNpbmVzc3xlbnwxfHx8fDE3NTU1Mzk1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Política e Notícias",
    image:
      "https://images.unsplash.com/photo-1668706971199-37e30a4e6298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljcyUyMGdvdmVybm1lbnQlMjBuZXdzfGVufDF8fHx8MTc1NTUzMTg1OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Geral",
    image:
      "https://images.unsplash.com/photo-1722684768315-11fc753354f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBnZW5lcmFsJTIwbmV3c3xlbnwxfHx8fDE3NTU1Mzk1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const generalNews = [
  {
    id: 7,
    title: "Descoberta Científica Revoluciona Medicina",
    summary:
      "Pesquisadores brasileiros descobrem nova terapia genética que promete curar doenças raras, abrindo caminho para tratamentos inovadores.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
    category: "Ciência",
    author: "Dr. Roberto Mendes",
    readTime: "8 min",
    publishedAt: "1 dia atrás",
  },
  {
    id: 8,
    title: "Startup Brasileira Conquista Mercado Global",
    summary:
      "Empresa de tecnologia nacional expande operações para 15 países, tornando-se referência mundial em soluções de sustentabilidade.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    category: "Negócios",
    author: "Marina Santos",
    readTime: "6 min",
    publishedAt: "2 dias atrás",
  },
  {
    id: 9,
    title: "Festival de Música Reúne 100 Mil Pessoas",
    summary:
      "Maior evento musical do ano acontece em São Paulo com artistas nacionais e internacionais, quebrando recordes de público.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
    category: "Música",
    author: "Carlos Rocha",
    readTime: "4 min",
    publishedAt: "3 dias atrás",
  },
  {
    id: 10,
    title: "Novo Marco Legal da Internet é Aprovado",
    summary:
      "Congresso aprova legislação que regulamenta uso de dados pessoais e inteligência artificial, fortalecendo direitos digitais.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    category: "Política",
    author: "Fernanda Lima",
    readTime: "7 min",
    publishedAt: "4 dias atrás",
  },
  {
    id: 11,
    title: "Brasil Lidera Ranking de Energias Limpas",
    summary:
      "País se destaca mundialmente na produção de energia solar e eólica, atraindo investimentos bilionários no setor.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
    category: "Sustentabilidade",
    author: "André Oliveira",
    readTime: "5 min",
    publishedAt: "5 dias atrás",
  },
  {
    id: 12,
    title:
      "Atletas Brasileiros Brilham em Competição Internacional",
    summary:
      "Delegação nacional conquista medalhas históricas em campeonato mundial, elevando o nome do Brasil no esporte.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    category: "Esportes",
    author: "Juliana Costa",
    readTime: "3 min",
    publishedAt: "6 dias atrás",
  },
];

export const SEHome = () => (
  <S.Container>
    <Header />

    <S.Main>
      <CoverflowCarousel />

      <S.SectionWhite>
        <S.SectionHeader>
          <h2>Últimas <span>Notícias</span></h2>
          <p>Fique por dentro dos principais acontecimentos do Brasil e do mundo com nossa cobertura completa e atualizada.</p>
        </S.SectionHeader>

        <S.Grid3>
          {latestArticles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </S.Grid3>
      </S.SectionWhite>

      <S.SectionDark>
        <S.SectionHeader>
          <h2><span>Tópicos em Destaque</span></h2>
          <p>Explore as principais categorias de notícias e mantenha-se informado sobre os temas que mais importam para você.</p>
        </S.SectionHeader>

        <S.Grid2>
          {topics.map(topic => (
            <TopicCard key={topic.id} {...topic} />
          ))}
        </S.Grid2>
      </S.SectionDark>

      <S.SectionWhite>
        <S.SectionHeader>
          <h2>Notícias <span>Gerais</span></h2>
          <p>Acompanhe as notícias mais importantes do mês e mantenha-se atualizado com os acontecimentos que marcaram o período.</p>
        </S.SectionHeader>

        <S.Grid3>
          {generalNews.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </S.Grid3>

        <S.ButtonWrapper>
          <S.ShowMoreButton>Ver Mais Notícias</S.ShowMoreButton>
        </S.ButtonWrapper>
      </S.SectionWhite>
    </S.Main>

    <Footer />
  </S.Container>
);

export default SEHome;
