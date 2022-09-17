import React from 'react';
import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Content from './layout/Content';
import Widgets from './layout/Widgets';

function App() {
  return (
    <div className="App">
      <Container>
        <Sidebar />
        <Content />
        <Widgets />
      </Container>
    </div>
  );
}

export default App;
