import React from 'react';
import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Timeline from './layout/Timeline';
import Widgets from './layout/Widgets';

function App() {
  return (
    <div className="App">
      <Container>
        <Sidebar />
        <Widgets />
        <Timeline />
      </Container>
    </div>
  );
}

export default App;
