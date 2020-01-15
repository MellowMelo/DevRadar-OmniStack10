import React, { useState } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'

//Component: Isolated Blocks of Html, css and js, wich dont inteferes in the rest of the application
//Props: Informations that a father Component pass to a child Component
//State: Informations holded by Component(Remember: imutability)

function App() {


  return (//<></> its a fragment, to avoid a classical error of multi components
    <div id="app">
      <aside>
        <strong className="">Sign up</strong>
        <form>
          <div class="input-block">
            <label hmlFor="github_username">Github User</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label hmlFor="techs">Tecnologies</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label hmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label hmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>      
          
          <button type="submit">Save</button>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
