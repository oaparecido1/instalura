import React from 'react';

import Header from './components/Header/index'
import Timeline from './components/Timeline/index';

function App() {
  return (
    <div id="root">
      <div data-reactroot="" className="main">
        <Header />
        <Timeline />
      </div>
    </div>
  );
}

export default App;
