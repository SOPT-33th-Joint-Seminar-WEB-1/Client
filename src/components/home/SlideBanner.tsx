import styled from 'styled-components';
import { IcBtnPage } from '../../assets/icons';

interface SlideProps {
  imageLinks: string[];
}

function SlideBanner({ imageLinks }: SlideProps) {
  return (
    <SlideBannerContainer>
      <SlideContainer>
        {imageLinks.map(item => (
          <SlideBannerImgContainer>
            <SlideBannerImgBox>
              <SlideBannerImg src={item} />
              <StyledIcBtnPage />
            </SlideBannerImgBox>
          </SlideBannerImgContainer>
        ))}
      </SlideContainer>
    </SlideBannerContainer>
  );
}

export default SlideBanner;

const SlideBannerContainer = styled.div`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

const SlideContainer = styled.div`
  display: flex;

  width: 301%;
`;

const SlideBannerImgContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  scroll-snap-align: start;
`;

const SlideBannerImgBox = styled.div`
  width: 34.1rem;
  height: 21.2rem;

  position: relative;

  border-radius: 1rem;
`;

const SlideBannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: inherit;
`;

const StyledIcBtnPage = styled(IcBtnPage)`
  position: absolute;
  right: 0.8rem;
  bottom: 1.2rem;
`;
