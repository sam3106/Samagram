import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
