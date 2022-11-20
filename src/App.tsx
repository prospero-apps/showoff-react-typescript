import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddWork from './components/AddWork'

export interface IState {
  works: {
    name: string
    year: number
    url: string
    description?: string
  }[]
}

function App() {
  const [works, setWorks] = useState<IState['works']>([
    {
      name: "Self-Portrait",
      url: "https://imgix.ranker.com/node_img/566/11307938/original/self-portrait-artwork-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375",
      year: 2008,
      description: "One of my best self-portraits so far, of which I've made hundreds"
    }
  ])
    
  return (
    <div className="App">
      <h1 className='title'>My Works</h1>
      <AddWork works={works} setWorks={setWorks}/>
      <List works={works} />
    </div>
  );
}

export default App;
