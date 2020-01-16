import React, { useState } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

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
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://img.culturacolectiva.com/content/2017/02/Josh-Homme.gif?_ga=2.256374219.1318657904.1579126936-397258964.1579126936" alt="Alex Turner"></img>
              <div className="user-info">
                <strong>Alex Turner</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Singer, fronman of Arctic Monkeys and The last shadow puppets</p>
            <a href="https://gihub.com/MellowMelo">Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://img.culturacolectiva.com/content/2017/02/Josh-Homme.gif?_ga=2.256374219.1318657904.1579126936-397258964.1579126936" alt="Alex Turner"></img>
              <div className="user-info">
                <strong>Alex Turner</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Singer, fronman of Arctic Monkeys and The last shadow puppets</p>
            <a href="https://gihub.com/MellowMelo">Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://img.culturacolectiva.com/content/2017/02/Josh-Homme.gif?_ga=2.256374219.1318657904.1579126936-397258964.1579126936" alt="Alex Turner"></img>
              <div className="user-info">
                <strong>Alex Turner</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Singer, fronman of Arctic Monkeys and The last shadow puppets</p>
            <a href="https://gihub.com/MellowMelo">Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://img.culturacolectiva.com/content/2017/02/Josh-Homme.gif?_ga=2.256374219.1318657904.1579126936-397258964.1579126936" alt="Alex Turner"></img>
              <div className="user-info">
                <strong>Alex Turner</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Singer, fronman of Arctic Monkeys and The last shadow puppets</p>
            <a href="https://gihub.com/MellowMelo">Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
