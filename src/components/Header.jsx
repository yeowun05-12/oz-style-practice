import { styled } from 'styled-components';
import { flexMixin, fontMixin } from '../styled';

const HeaderContainer = styled.header`
  ${flexMixin({ justify: 'space-between', align: 'center' })}
  padding: 20px 20px;
  background-color: black;

  ul {
    ${flexMixin({ justify: 'center', align: 'center', gap: '20px' })}

    li {
      ${fontMixin({ fontSize: '16', fontWeight: '400' })}
      list-style: none;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer className='header-container'>
      <h1>OZ코딩스쿨</h1>
      <ul className='menu-container'>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;
