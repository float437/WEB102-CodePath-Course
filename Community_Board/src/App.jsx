import './App.css';
import Header from './components/header.jsx';
import Card from './components/Card.jsx';

import marioKartWorldImg from '../src/assets/images/b664445df3f7a3765a760822d725ea1853bc6f43d2aa96ccee81d6f45cb281ef.avif';
import marioKart8DeluxeImg from '../src/assets/images/mariokart_1024_1024.jpg';
import botwImg from '../src/assets/images/heroimage_169_The-Legend-of-Zelda-Breath-of-the-Wild.png';
import totkImg from '../src/assets/images/__________________.jpg';
import marioWonderImg from '../src/assets/images/heroimage_smbwonder_square.jpg';
import kirbyImg from '../src/assets/images/kirbysquare.jpg';
import smashImg from '../src/assets/images/heroimage_square_super-smash.png';
import echoesOfWisdomImg from '../src/assets/images/The-Legend-of-Zelda_EofW_square__1_.jpg';
import marioPartyImg from '../src/assets/images/Super-Mario-Party-Jamboree_square.jpg';
import marioOdysseyImg from '../src/assets/images/s_odyssey_1024_1024.jpg';
import animalCrossingImg from '../src/assets/images/animal_1024_1024.jpg';
import bayonetta3Img from '../src/assets/images/bayonetta3_heroimage_16_9.jpg';

const App = () => {
  return (
    <>
      <div>
          <Header/>
        <div className='content'>
          <Card name="Mario Kart World" type="Racing" image={marioKartWorldImg}/>
          <Card name="Mario Kart 8 Deluxe" type="Racing" image={marioKart8DeluxeImg}/>
          <Card name="Legend of Zelda: Breath of The Wild" type="Adventure RPG" image={botwImg}/>
          <Card name="Legend of Zelda: Tears of the Kingdom" type="Adventure RPG" image={totkImg}/>
          <Card name="Super Mario Bros Wonder" type="Platformer" image={marioWonderImg}/>
          <Card name="Kirby and the Forgotten Land" type="Platformer" image={kirbyImg}/>
          <Card name="Super Smash Bros. Ultimate" type="Fighting" image={smashImg}/>
          <Card name="The Legend of Zelda: Echos of Wisdom" type="Adventure RPG" image={echoesOfWisdomImg}/>
          <Card name="Super Mario Party Jamboree" type="Party" image={marioPartyImg}/>
          <Card name="Super Mario Odyssey" type="Platformer" image={marioOdysseyImg}/>
          <Card name="Animal Crossing New Horizons" type="Simulation" image={animalCrossingImg}/>
          <Card name="Bayonetta 3" type="Action" image={bayonetta3Img}/>


        </div>
      </div>
    </>
  )
}

export default App
