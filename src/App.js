import React from 'react';
import Game from './Components/Game'
import penguinlogo from './assets/cdhu.png'
import knightslogo from './assets/nyxl.png'


const App = () => {
  const penguins = {
    name: 'Pittsburg Penguins',
    logo: penguinlogo
  }

  const knights = {
    name: 'Las Vegas Golden Knights',
    logo: knightslogo
  }

  const rootStyle = {
    fontSize: "21px",
    background: 'linear-gradient(90deg, #1b2036 50%,#b4926a 50%)',
    color: '#fff',
    height: '1000px'
  }

  return (
    <div id="root" style={rootStyle}>
      <Game
        venue="Hockey Arena"
        home={knights}
        away={penguins} 
      />
    </div>
  )
}

export default App;
