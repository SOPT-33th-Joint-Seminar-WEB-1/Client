import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import { IcEnter } from '../../assets/icons';
import { CARD_REVIEW_BOOKS } from '../../constants/home';

interface CardReviewProps {
  img: string;
  description: string;
}

function CardReviewSlider() {
  return (
    <CardReviewSliderWrapper>
      <SectionHeader title="카드리뷰" icon={<IcEnter />}></SectionHeader>
      <CardReviewContainer>
        <CardReviewItemWrapper style={{ width: `${CARD_REVIEW_BOOKS.length * 30}rem` }}>
          {CARD_REVIEW_BOOKS.map(({ img, description }) => (
            <CardReview img={img} description={description} />
          ))}
        </CardReviewItemWrapper>
      </CardReviewContainer>
    </CardReviewSliderWrapper>
  );
}

export default CardReviewSlider;

function CardReview({ img, description }: CardReviewProps) {
  return (
    <CardReviewWrapper>
      <CardReviewImg src={img} />
      <CardReviewDescriptionBox>
        <CardReviewDescription>{description}</CardReviewDescription>
      </CardReviewDescriptionBox>
    </CardReviewWrapper>
  );
}

const CardReviewSliderWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const CardReviewContainer = styled.div`
  width: 100%;
  margin-top: 0.8rem;

  overflow-x: auto;
  white-space: nowrap;
`;

const CardReviewItemWrapper = styled.div`
  display: flex;
  column-gap: 1.6rem;

  padding-left: 1.5rem;
`;

const CardReviewWrapper = styled.div`
  position: relative;

  width: 28.2rem;
  height: 26rem;

  border-radius: ${({ theme }) => theme.radius.m};
`;

const CardReviewImg = styled.img`
  width: 100%;
  height: 25.4rem;

  border-radius: inherit;

  object-fit: fill;
`;

const CardReviewDescriptionBox = styled.div`
  width: 100%;
  height: 8rem;

  background-color: ${({ theme }) => theme.colors.black};

  border-radius: 0 0 ${({ theme }) => theme.radius.m} ${({ theme }) => theme.radius.m};

  padding: 2rem;

  position: absolute;
  bottom: 0;
`;

const CardReviewDescription = styled.p`
  width: 14.5rem;
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.white};

  line-height: 140%;

  white-space: initial;
`;
