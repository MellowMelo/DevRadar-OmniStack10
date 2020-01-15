import React from 'react';

function App() {
  function IncreamentCounter(){
    alert("HELLO");
  }

  return (//<></> its a fragment, to avoid a classical error of multi components
    <>
      <h1>Counter: 0</h1>
      <button onClick={IncreamentCounter}>Increament</button>
    </>
  );
}

export default App;
