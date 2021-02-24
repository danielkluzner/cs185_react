import './App.css';
import React, { useState } from 'react';
import TabList from './components/TabList';
import Body from './components/Body';

function App() {
  const [Tab_Id, setTab_Id] = useState('Home');

  const changeTab = (e) => {
    if (!e.target.textContent) { return; }
    setTab_Id(e.target.textContent);
  }

  return (
    <div className="App">
      <TabList changeTab={changeTab} activeTab={Tab_Id} />
      <Body activeTab={Tab_Id} />
    </div>
  );
}

export default App;
