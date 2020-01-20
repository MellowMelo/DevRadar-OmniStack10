import React, { useState, useEffect } from 'react';
import api from './services/api';

import DevItem from './components/DevItem/index';
import DevForm from './components/DevForm/index';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

//Component: Isolated Blocks of Html, css and js, wich dont inteferes in the rest of the application
//Props: Informations that a father Component pass to a child Component
//State: Informations holded by Component(Remember: imutability)

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
        
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }
  return (//<></> its a fragment, to avoid a classical error of multi components
    <div id="app">
      <aside>
        <strong className="">Sign up</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => {
            return (
              <DevItem key={dev._id} dev={dev} />
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
