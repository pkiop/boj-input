import styled from '@emotion/styled';
import Info from './components/Info';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-primary);
`;

const Content = styled.div`
  position: relative;

  width: 64rem;
  height: 64rem;
  background-color: var(--color-secondary);
  border-radius: 0.5rem;
  padding: 6rem;
  z-index: 1;

  &:before {
    position: absolute;
    z-index: -1;
    top: -1.5em;
    right: -1.5em;
    bottom: -1.5em;
    left: -1.5em;
    border: inherit;
    border-radius: 1rem;
    border-color: transparent;
    background: inherit;
    background-clip: border-box;
    filter: blur(0.4rem);
    content: '';
  }
`;

function App() {
  return (
    <Layout>
      <Content>
        <Info />
      </Content>
    </Layout>
  );
}

export default App;
