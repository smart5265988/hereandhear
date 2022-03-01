import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppContents from './AppContents';

function App() {
  return (
    <Router>
      <Route component={AppContents} />
    </Router>
  );
}

export default App;
