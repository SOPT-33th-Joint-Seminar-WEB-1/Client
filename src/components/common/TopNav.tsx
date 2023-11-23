import React from 'react';
import styled from 'styled-components';
import PAGE from '../../constants/page';

interface TopNavProps {
  page: number;
}

function TopNav({ page }: TopNavProps) {
  return (
    <TopNavWrapper page={page}>
      <Nav>
        {page === PAGE.HOME ? <ActiveNavText>HOME</ActiveNavText> : <NavText>HOME</NavText>}
      </Nav>
      <Nav>
        {page === PAGE.BEST ? <ActiveNavText>베스트</ActiveNavText> : <NavText>베스트</NavText>}
      </Nav>
      <Nav>
        <NavText>신간</NavText>
      </Nav>
      <Nav>
        <NavText>이벤트</NavText>
      </Nav>
      <Nav>
        <NavText>외서</NavText>
      </Nav>
      <Nav>
        <NavText>온라인중고</NavText>
      </Nav>
    </TopNavWrapper>
  );
}

export default TopNav;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  padding: 1.6rem 1rem 1.2rem 1rem;
`;

const NavText = styled.p`
  font: ${({ theme }) => theme.fonts.title2_reg};
`;
const ActiveNavText = styled.p`
  font: ${({ theme }) => theme.fonts.title2_bold};
  color: ${({ theme }) => theme.colors.blue_600};
`;

const TopNavWrapper = styled.div<TopNavProps>`
  position: fixed;
  z-index: 10;
  top: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.colors.white};

  & ${Nav}:first-child {
    box-shadow: ${({ theme, page }) =>
      page === PAGE.HOME ? ` 0 -3px 0  0 inset ${theme.colors.blue_600}` : 'none'};
  }

  & ${Nav}:nth-child(2) {
    box-shadow: ${({ theme, page }) =>
      page === PAGE.BEST ? ` 0 -3px 0  0 inset ${theme.colors.blue_600}` : 'none'};
  }
`;