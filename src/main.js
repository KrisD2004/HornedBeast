import './App.css';
import HornedBeast from './Horned';

// fucntion to put the content of the page
function Main() {
    return (
      <div>
        <main>This is Horned Beasts</main>
        <HornedBeast title = 'ram' description = 'big horns' image = 'https://i.pinimg.com/originals/64/89/48/6489484b3796eae432762696cca62b16.jpg'></HornedBeast>
        <HornedBeast title = 'Xerneas' description = 'pokemon' image = 'https://th.bing.com/th/id/OIP.wtKjqXenm2SZJtClaWoUAAHaKH?w=201&h=276&c=7&r=0&o=5&dpr=1.3&pid=1.7'></HornedBeast>
      </div>
      
    );
  }

export default Main