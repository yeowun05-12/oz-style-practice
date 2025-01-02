//import './App.scss';
import { contents } from './assets/data/data';
import Content from './components/Content';
import Header from './components/Header';
import { styled } from 'styled-components';
import { flexMixin } from './styled';

const MainSection = styled.section`
  ${flexMixin({
    justify: 'center',
    align: 'center',
    wrap: 'wrap',
    gap: '20px',
  })}
  padding: 20px 40px;
`;

function App() {
  return (
    <main>
      <Header />
      <MainSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </MainSection>
    </main>
  );
}

export default App;
